export class Tasks {
  // タスクNoを管理するために使用
  public taskNumber = 1
  // task-listのidがあるタグを取得
  private taskList = document.getElementById("task-list")
  // task-nameのidがあるinputタグを取得
  private inputName = document.getElementById("task-name") as HTMLInputElement
  // task-detailのidがあるinputタグを取得
  private inputDetail = document.getElementById("task-detail") as HTMLInputElement

  public createTask() {
    // 入力フォームの内容を取得
    const name = this.inputName.value
    const detail = this.inputDetail.value
    // 入力が無い場合はアラートを出して処理終了
    if (!name || !detail) {
      alert("入力してください")
      return
    }

    // taskListが存在しない場合は処理終了
    if (!this.taskList) return

    // trタグを作成
    const tr = document.createElement("tr")
    // tdタグの中身を作成
    const td = `
      <td>${this.taskNumber}</td>
      <td>${name}</td>
      <td>${detail}</td>
      <td><button>完了</button></td>
    `

    // 作成したtrタグにtdタグを設定
    tr.innerHTML = td
    // task-listのidがあるタグの末尾にtrタグを追加
    this.taskList.appendChild(tr)
    // タスク番号をインクリメント(加算)
    this.taskNumber++

  }
}
