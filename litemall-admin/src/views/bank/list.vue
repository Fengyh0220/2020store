<template>
  <div class="app-container">

    <!-- 查询和其他操作 -->
    <div class="filter-container">
      <!-- <el-input v-model="listQuery.goodsId" clearable class="filter-item" style="width: 200px;" placeholder="请输入商品编号" /> -->
      <!-- <el-button v-permission="['GET /admin/groupon/list']" class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">查找</el-button> -->
      <el-button v-permission="['POST /admin/groupon/create']" class="filter-item" type="primary" icon="el-icon-edit" @click="handleCreate">添加</el-button>
      <el-button
        :loading="downloadLoading"
        class="filter-item"
        type="primary"
        icon="el-icon-download"
        @click="handleDownload"
      >导出
      </el-button>
    </div>

    <!-- 查询结果 -->
    <el-table v-loading="listLoading" :data="list" element-loading-text="正在查询中。。。" border fit highlight-current-row>

      <el-table-column align="center" label="姓名" prop="goodsId" />

      <el-table-column align="center" label="金额" prop="discount" />

      <el-table-column align="center" label="银行卡号" prop="activitiStock" />

      <el-table-column align="center" label="审核状态" prop="status">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status === 0 ? 'success' : 'error' ">{{ statusMap[scope.row.status] }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" width="200" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button v-permission="['POST /admin/groupon/update']" type="primary" size="mini" @click="handleUpdate(scope.row)">审核</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 添加或修改对话框 -->
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form
        ref="dataForm"
        :rules="rules"
        :model="dataForm"
        status-icon
        label-position="left"
        label-width="120px"
        style="width: 400px; margin-left:50px;"
      >
        <el-form-item label="是否审核成功" prop="isHot">
          <el-select v-model="dataForm.isHot" placeholder="请选择">
            <el-option :value="true" label="成功" />
            <el-option :value="false" label="失败" />
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button v-if="dialogStatus=='create'" type="primary" @click="createData">确定</el-button>
        <el-button v-else type="primary" @click="updateData">确定</el-button>
      </div>
    </el-dialog>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />

    <el-tooltip placement="top" content="返回顶部">
      <back-to-top :visibility-height="100" />
    </el-tooltip>

  </div>
</template>

<script>
import { listGroupon, publishGroupon, deleteGroupon, editGroupon } from '@/api/groupon'
import BackToTop from '@/components/BackToTop'
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination

export default {
  name: 'GrouponRule',
  components: { BackToTop, Pagination },
  data() {
    return {
      list: [],
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        goodsId: undefined,
        sort: 'add_time',
        order: 'desc'
      },
      downloadLoading: false,
      dataForm: {
        id: undefined,
        goodsId: '',
        discount: '',
        discountMember: '1',
        expireTime: undefined,
        startTime: undefined,
        activitiStock: '',
        isHot: ''
      },
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: '编辑',
        create: '创建'
      },
      statusMap: [
        '审核成功',
        '审核失败'
      ],
      rules: {
        isHot: [{ required: true, message: '请选择审核状态', trigger: 'blur' }]
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      listGroupon(this.listQuery).then(response => {
        this.list = response.data.data.list
        this.total = response.data.data.total
        this.listLoading = false
      }).catch(() => {
        this.list = []
        this.total = 0
        this.listLoading = false
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    resetForm() {
      this.dataForm = {
        id: undefined,
        goodsId: '',
        discount: '',
        discountMember: '1',
        activitiStock: '',
        expireTime: undefined
      }
    },
    handleCreate() {
      this.resetForm()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    createData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          publishGroupon(this.dataForm).then(response => {
            this.list.unshift(response.data.data)
            this.dialogFormVisible = false
            this.$notify.success({
              title: '成功',
              message: '创建限时抢购成功'
            })
          }).catch(response => {
            this.$notify.error({
              title: '失败',
              message: response.data.errmsg
            })
          })
        }
      })
    },
    handleUpdate(row) {
      this.dataForm = Object.assign({}, row)
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    updateData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          editGroupon(this.dataForm).then(() => {
            for (const v of this.list) {
              if (v.id === this.dataForm.id) {
                const index = this.list.indexOf(v)
                this.list.splice(index, 1, this.dataForm)
                break
              }
            }
            this.dialogFormVisible = false
            this.$notify.success({
              title: '成功',
              message: '更新限时抢购成功'
            })
          }).catch(response => {
            this.$notify.error({
              title: '失败',
              message: response.data.errmsg
            })
          })
        }
      })
    },
    handleDelete(row) {
      deleteGroupon(row).then(response => {
        this.$notify.success({
          title: '成功',
          message: '删除限时抢购成功'
        })
        this.getList()
      }).catch(response => {
        this.$notify.error({
          title: '失败',
          message: response.data.errmsg
        })
      })
    },
    handleDownload() {
      this.downloadLoading = true
        import('@/vendor/Export2Excel').then(excel => {
          const tHeader = ['商品ID', '名称', '首页主图', '限时折扣', '活动库存', '活动开始时间', '活动结束时间']
          const filterVal = ['id', 'name', 'pic_url', 'discount', 'activitiStock', 'addTime', 'expireTime']
          excel.export_json_to_excel2(tHeader, this.list, filterVal, '商品信息')
          this.downloadLoading = false
        })
    }
  }
}
</script>
