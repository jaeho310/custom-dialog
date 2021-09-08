
<template lang="">
<v-app>
  <v-container>
    <v-col>
      <v-row>
        <v-btn
        color="primary mb-3"
        @click="alertDialog"
        >
          alert용 기본 dialog
        </v-btn>
      </v-row>
      <v-row>
        <v-btn
        color="primary mb-3"
        @click="yesOrNoDialog"
        >
          yes or no 선택 dialog
        </v-btn>
      </v-row>
      <v-row>
        <v-btn
        color="primary mb-3"
        @click="routerDialog"
        >
          dialog 콜백으로 router.push("home")
        </v-btn>
      </v-row>
      <v-row>
        <v-btn
        color="primary mb-3"
        @click="doubleDialog"
        >
          dialog 콜백으로 dialog 또 띄우기(dialog가 2중으로 뜬다면 delay를 포함시켜주세요)
        </v-btn>
      </v-row>
      <v-row>
        <v-btn
        color="primary mb-3"
        @click="withoutDelay"
        >
          그렇지않다면 이렇게 될겁니다.
        </v-btn>
      </v-row>
    </v-col>

    <v-dialog
    max-width="400"
    v-model="dialogManager.showDialog"
    >
      <custom-dialog
        :text="dialogManager.dialogInfo.text"
        :question="dialogManager.dialogInfo.question"
        @hide="dialogManager.dialogInfo.hideDialog"
        @submit="dialogManager.dialogInfo.submitDialog"
      />
    </v-dialog>

  </v-container>
</v-app>
</template>
<script>
  import { sync } from 'vuex-pathify'
  import dialog from '../utils/dialog.js'
  export default {
    computed: {
      ...sync('dialog2',[
        'dialogManager'
      ])
    },
    methods: {
      alertDialog() {
        dialog.makeDialog({text: "alert용 dialog 입니다."})
      },
      yesOrNoDialog() {
        dialog.makeDialog({text: "payload의 question을 true로 주면 선택창이 나옵니다.", question: true})
      },
      routerDialog() {
        dialog.makeDialog({
          text: "home으로 이동하시겠습니까?",
          question: true,
          callback: this.toHome,
        })
      },
      doubleDialog() {
        dialog.makeDialog({
          text: "등록하시겠습니까?",
          question: true,
          callback: this.successDialog,
        })
      },
      withoutDelay() {
        dialog.makeDialog({
          text: "등록하시겠습니까?",
          question: true,
          callback: this.successDialogWithoutDelay,
        })
      },
      toHome() {
        this.$router.push("/home")
      },
      successDialog() {
        dialog.makeDialog({text:"성공적으로 등록되었습니다.", delay: 120})
      },
      successDialogWithoutDelay() {
        dialog.makeDialog({text:"성공적으로 등록되었습니다."})
      }
    },
  }
</script>
<style lang="">
</style>