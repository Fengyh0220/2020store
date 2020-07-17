<template>
  <div class="app-container">
    <!-- 查询结果 -->
    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row>
      <el-table-column align="center" label="银行名称" prop="bank_name" />

      <el-table-column align="center" label="银行卡号" prop="bank_card" />

      <el-table-column align="center" label="持卡人姓名" prop="full_name" />
      <el-table-column align="center" label="操作" width="200" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button v-permission="['POST /admin/bank/updateBank']" type="primary" size="mini" @click="handleUpdate(scope.row)">审核</el-button>
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
    <el-tooltip placement="top" content="返回顶部">
      <back-to-top :visibility-height="100" />
    </el-tooltip>

  </div>
</template>

<script>
import { selectWithdrawalRecordList, upDateWithdrawalRecordState } from '@/api/bank'
import BackToTop from '@/components/BackToTop'

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
        bank_card: '',
        full_name: '',
        sort: 'add_time',
        order: 'desc'
      },
      downloadLoading: false,
      dataForm: {
        id: undefined,
        bank_name: '',
        bank_card: '',
        full_name: '',
        state: undefined
      },
      dialogFormVisible: false,
      dialogStatus: '',
      rules: {
        bank_name: [{ required: true, message: '银行名称不能为空', trigger: 'blur' }],
        bank_card: [{ required: true, message: '银行卡号不能为空', trigger: 'blur' }],
        full_name: [{ required: true, message: '持卡人不能为空', trigger: 'blur' }]
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      selectWithdrawalRecordList().then(response => {
        this.list = response.data.data.bankList
        this.listLoading = false
      }).catch(() => {
        this.list = []
        // this.total = 0
        this.listLoading = false
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
          const prams = {
            id: this.dataForm.id,
            state: this.dataForm.state
          }
          upDateWithdrawalRecordState(prams).then(() => {
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
              message: '审核提交成功'
            })
          }).catch(response => {
            this.$notify.error({
              title: '失败',
              message: response.data.errmsg
            })
          })
        }
      })
    }
  }
}
</script>
