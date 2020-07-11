<template>
  <div class="app-container">

    <!-- 查询和其他操作 -->
    <div class="filter-container">
      <!-- <el-input v-model="listQuery.bank_name" clearable class="filter-item" style="width: 200px;" placeholder="请输入商品编号" /> -->
      <!-- <el-button v-permission="['GET /admin/groupon/list']" class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">查找</el-button> -->
      <el-button v-permission="['POST /admin/bank/updateBank']" class="filter-item" type="primary" icon="el-icon-edit" @click="handleCreate">添加</el-button>
      <!-- <el-button
        :loading="downloadLoading"
        class="filter-item"
        type="primary"
        icon="el-icon-download"
        @click="handleDownload"
      >导出
      </el-button> -->
    </div>

    <!-- 查询结果 -->
    <el-table v-loading="listLoading" :data="list" element-loading-text="正在查询中。。。" border fit highlight-current-row>
      <el-table-column align="center" label="序列号" prop="id" />

      <el-table-column align="center" label="银行名称" prop="bank_name" />

      <el-table-column align="center" label="银行卡号" prop="id_number" />

      <el-table-column align="center" label="开户行" prop="bank_deposit" />

      <el-table-column align="center" label="状态" prop="state">
        <template slot-scope="scope">
          <el-tag :type="scope.row.state === 0 ? 'success' : 'error' ">{{ scope.row.state ==1 ? '是' : '否' }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" width="200" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button v-permission="['POST /admin/bank/updateBank']" type="primary" size="mini" @click="handleUpdate(scope.row)">编辑</el-button>
          <el-button v-permission="['POST /bank/deleteBank']" type="danger" size="mini" @click="handleDelete(scope.row.id)">删除</el-button>
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
        <el-form-item label="银行名称" prop="bank_name">
          <el-input v-model="dataForm.bank_name" />
        </el-form-item>
        <el-form-item label="银行卡号" prop="id_number">
          <el-input v-model="dataForm.id_number" />
        </el-form-item>
        <el-form-item label="开户行" prop="bank_deposit">
          <el-input v-model="dataForm.bank_deposit" />
        </el-form-item>
        <el-form-item label="是否启用" prop="state">
          <el-select v-model="dataForm.state" placeholder="请选择">
            <el-option value="1" label="是" />
            <el-option value="0" label="否" />
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button v-if="dialogStatus=='create'" type="primary" @click="createData">确定</el-button>
        <el-button v-else type="primary" @click="updateData">确定</el-button>
      </div>
    </el-dialog>

    <!-- <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" /> -->

    <el-tooltip placement="top" content="返回顶部">
      <back-to-top :visibility-height="100" />
    </el-tooltip>

  </div>
</template>

<script>
// import {deleteGroupon, editGroupon } from '@/api/groupon'
import { listBank, publishGroupon, editGroupon, deleteGroupon } from '@/api/bank'
import BackToTop from '@/components/BackToTop'
// import Pagination from '@/components/Pagination' // Secondary package based on el-pagination

export default {
  name: 'GrouponRule',
  components: { BackToTop },
  data() {
    return {
      list: [],
      // total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        bank_name: undefined,
        sort: 'add_time',
        order: 'desc'
      },
      downloadLoading: false,
      dataForm: {
        id: undefined,
        bank_name: '',
        id_number: '',
        bank_deposit: '',
        state: undefined
      },
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: '编辑',
        create: '创建'
      },
      statusMap: [
        '是',
        '否'
      ],
      rules: {
        bank_name: [{ required: true, message: '银行名称不能为空', trigger: 'blur' }],
        id_number: [{ required: true, message: '银行卡号不能为空', trigger: 'blur' }],
        bank_deposit: [{ required: true, message: '开户行不能为空', trigger: 'blur' }],
        state: [{ required: true, message: '请选择是否开启', trigger: 'blur' }]
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      listBank('').then(response => {
        this.list = response.data.data.bankList
        this.listLoading = false
      }).catch(() => {
        this.list = []
        // this.total = 0
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
        bank_name: '',
        id_number: '',
        bank_deposit: '',
        state: undefined
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
              message: '成功添加银行卡'
            })
            this.getList()
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
      console.log(row)
      const idData = {
        id: row
      }
      deleteGroupon(idData).then(response => {
        this.$notify.success({
          title: '成功',
          message: '删除成功'
        })
        this.getList()
      }).catch(response => {
        this.$notify.error({
          title: '失败',
          message: response.data.errmsg
        })
      })
    }
    // handleDownload() {
    //   this.downloadLoading = true
    //     import('@/vendor/Export2Excel').then(excel => {
    //       const tHeader = ['商品ID', '名称', '首页主图', '限时折扣', '活动库存', '活动开始时间', '活动结束时间']
    //       const filterVal = ['id', 'name', 'pic_url', 'id_number', 'bank_deposit', 'addTime', 'expireTime']
    //       excel.export_json_to_excel2(tHeader, this.list, filterVal, '商品信息')
    //       this.downloadLoading = false
    //     })
    // }
  }
}
</script>
