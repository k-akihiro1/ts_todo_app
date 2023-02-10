export class Tasks {
  // task-nameのidがあるinputタグを取得
  private inputName = document.getElementById("task-name") as HTMLInputElement
  // task-detailのidがあるinputタグを取得
  private inputDetail = document.getElementById("task-detail") as HTMLInputElement

  public createTask() {
    // 入力フォームの内容を取得
    const name = this.inputName.value
    const detail = this.inputDetail.value
    // 動作確認のためalert()を追加
    alert(name)
    alert(detail)
  }
}
