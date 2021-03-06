<template>
  <div class="app-container">

    <!-- 查询和其他操作 -->
    <div class="filter-container">
      <el-input v-model="listQuery.username" clearable class="filter-item" style="width: 200px;" placeholder="请输入用户名" />
      <el-input v-model="listQuery.mobile" clearable class="filter-item" style="width: 200px;" placeholder="请输入手机号" />
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">查找</el-button>
      <el-button :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">导出</el-button>
    </div>

    <!-- 查询结果 -->
    <el-table v-loading="listLoading" :data="list" element-loading-text="正在查询中。。。" border fit highlight-current-row>
      <el-table-column align="center" width="100px" label="用户ID" prop="id" sortable />

      <el-table-column align="center" label="用户名" prop="username" />

      <el-table-column align="center" label="手机号码" prop="mobile" />

      <el-table-column align="center" label="性别" prop="gender">
        <template slot-scope="scope">
          <el-tag>{{ genderDic[scope.row.gender] }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column align="center" label="银行卡号" prop="bank_card" />

      <el-table-column align="center" label="开户行名称" prop="bank_name" />

      <el-table-column align="center" label="姓名" prop="full_name" />

      <el-table-column align="center" label="用户等级" prop="userLevel">
        <template slot-scope="scope">
          <el-tag>{{ levelDic[scope.row.userLevel] }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column align="center" label="余额" prop="balance" />

      <el-table-column align="center" label="状态" prop="status">
        <template slot-scope="scope">
          <el-tag>{{ statusDic[scope.row.status] }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" prop="status">
        <template slot-scope="scope">
          <el-button v-permission="['POST /admin/brand/update']" type="primary" size="mini" @click="handleUpdate(scope.row)">余额</el-button>
          <el-button type="primary" size="mini" @click="checkoutUpdate(scope.row)">银行卡</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
    <!-- 添加或修改对话框 -->
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form ref="dataForm" :rules="rules" :model="dataForm" status-icon label-position="left" label-width="100px" style="width: 400px; margin-left:50px;">
        <el-form-item label="余额" prop="balance">
          <el-input v-model="dataForm.balance" placeholder="请输入修改的余额" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="updateData">确定</el-button>
      </div>
    </el-dialog>
    <!-- 修改银行卡 -->
    <el-dialog :title="textMap[dialogStatusbank]" :visible.sync="bankVisible">
      <el-form
        ref="dataFormbank"
        :rules="rules"
        :model="dataFormbank"
        status-icon
        label-position="left"
        label-width="120px"
        style="width: 400px; margin-left:50px;"
      >
        <el-form-item label="开户行名称" prop="bank_name">
          <el-input v-model="dataFormbank.bank_name" />
        </el-form-item>
        <el-form-item label="银行卡号" prop="bank_card">
          <el-input v-model="dataFormbank.bank_card" />
        </el-form-item>
        <el-form-item label="姓名" prop="full_name">
          <el-input v-model="dataFormbank.full_name" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="bankVisible = false">取消</el-button>
        <el-button type="primary" @click="updateDatabank">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { fetchList, updateBalance } from '@/api/user'
import { updateBankInfo } from '@/api/bank'
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination

export default {
  name: 'User',
  components: { Pagination },
  data() {
    return {
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        username: undefined,
        mobile: undefined,
        bank_name: '',
        bank_card: '',
        full_name: '',
        sort: 'add_time',
        order: 'desc'
      },
      dataForm: {
        balance: '0'
      },
      dataFormbank: {
        balance: '0'
      },
      textMap: {
        update: '编辑',
        create: '创建'
      },
      dialogFormVisible: false,
      bankVisible: false,
      downloadLoading: false,
      dialogStatus: '',
      dialogStatusbank: '',
      genderDic: ['未知', '男', '女'],
      levelDic: ['普通用户', 'VIP用户', '高级VIP用户'],
      statusDic: ['可用', '禁用', '注销'],
      rules: {
        balance: [
          { required: true, message: '余额不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
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
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['用户名', '手机号码', '性别', '状态']
        const filterVal = ['username', 'mobile', 'gender', 'status']
        excel.export_json_to_excel2(tHeader, this.list, filterVal, '用户信息')
        this.downloadLoading = false
      })
    },
    handleUpdate(row) {
      console.log(row)
      this.dataForm = Object.assign({}, row)
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      // this.$nextTick(() => {
      //   this.$refs['dataForm'].clearValidate()
      // })
    },
    checkoutUpdate(row) {
      this.dataFormbank = Object.assign({}, row)
      this.dialogStatusbank = 'update'
      this.bankVisible = true
    },
    updateDatabank() {
      this.$refs['dataFormbank'].validate(valid => {
        if (valid) {
          const prams = {
            id: this.dataFormbank.id,
            bank_name: this.dataFormbank.bank_name,
            bank_card: this.dataFormbank.bank_card,
            full_name: this.dataFormbank.full_name
          }
          updateBankInfo(prams)
            .then(() => {
              for (const v of this.list) {
                if (v.id === this.dataFormbank.id) {
                  const index = this.list.indexOf(v)
                  this.list.splice(index, 1, this.dataFormbank)
                  break
                }
              }
              this.bankVisible = false
              this.$notify.success({
                title: '成功',
                message: '修改成功'
              })
            })
            .catch(response => {
              this.$notify.error({
                title: '失败',
                message: response.data.errmsg
              })
            })
        }
      })
    },
    updateData() {
      this.$refs['dataForm'].validate(valid => {
        if (valid) {
          updateBalance(this.dataForm)
            .then(() => {
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
                message: '更新余额成功'
              })
            })
            .catch(response => {
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
