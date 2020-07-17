<template>
  <div class="app-container">

    <!-- 查询和其他操作 -->
    <div class="filter-container">
      <!-- <el-input v-model="listQuery.turn_name" clearable class="filter-item" style="width: 200px;" placeholder="请输入商品编号" /> -->
      <!-- <el-button v-permission="['GET /admin/groupon/list']" class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">查找</el-button> -->
      <!-- <el-button v-permission="['POST /admin/groupon/create']" class="filter-item" type="primary" icon="el-icon-edit" @click="handleCreate">添加</el-button> -->
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

      <el-table-column align="center" label="持卡人" prop="turn_name" />

      <el-table-column align="center" label="金额" prop="turn_price" />

      <el-table-column align="center" label="银行卡" prop="turn_name" />

      <el-table-column align="center" label="银行卡号" prop="turn_account" />

      <el-table-column align="center" label="审核状态" prop="turn_state">
        <template slot-scope="scope">
          <el-tag :type="scope.row.turn_state === 0 ? 'success' : 'error' ">{{ scope.row.turn_state == 1 ? '审核成功': scope.row.turn_state==0 ? '待审核': '审核失败' }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" width="200" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button v-if="scope.row.turn_state == 0" v-permission="['POST /admin/groupon/update']" type="primary" size="mini" @click="handleUpdate(scope.row)">审核</el-button>
          <el-button v-else v-permission="['POST /admin/groupon/update']" type="primary" size="mini" style="background-color: #999;">审核</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 添加或修改对话框 -->
    <el-dialog :title="textMap[dialogturn_state]" :visible.sync="dialogFormVisible">
      <el-form
        ref="dataForm"
        :rules="rules"
        :model="dataForm"
        turn_state-icon
        label-position="left"
        label-width="120px"
        style="width: 400px; margin-left:50px;"
      >
        <el-form-item label="更改审核结果" prop="state">
          <el-select v-model="dataForm.state" placeholder="请选择">
            <el-option value="1" label="成功" />
            <el-option value="2" label="失败" />
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="updateData">确定</el-button>
      </div>
    </el-dialog>

    <!-- <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" /> -->

    <el-tooltip placement="top" content="返回顶部">
      <back-to-top :visibility-height="100" />
    </el-tooltip>

  </div>
</template>

<script>
import { listGroupon, updateTurnRecord } from '@/api/bank'
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
        turn_name: undefined,
        sort: 'add_time',
        order: 'desc'
      },
      downloadLoading: false,
      dataForm: {
        id: undefined,
        state: undefined
      },
      dialogFormVisible: false,
      dialogturn_state: '',
      turn_stateMap: [
        '审核成功',
        '审核失败'
      ],
      rules: {
        state: [{ required: true, message: '请选择审核状态', trigger: 'blur' }]
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      listGroupon('').then(response => {
        this.list = response.data.data
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
    handleUpdate(row) {
      const data = {
        userId: row.user_id,
        id: row.id,
        state: row.turn_state
      }
      this.dataForm = Object.assign({}, data)
      if (this.dataForm.state === '0') {
        this.dataForm.state = undefined
      }
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    updateData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          updateTurnRecord(this.dataForm).then(() => {
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
              message: '您已提交审核'
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
    handleDownload() {
      this.downloadLoading = true
        import('@/vendor/Export2Excel').then(excel => {
          const tHeader = ['姓名', '金额', '银行卡', '审核状态']
          const filterVal = ['turn_name', 'turn_price', 'turn_account', 'turn_state']
          excel.export_json_to_excel2(tHeader, this.list, filterVal, '转账记录审核名单')
          this.downloadLoading = false
        })
    }
  }
}
</script>
