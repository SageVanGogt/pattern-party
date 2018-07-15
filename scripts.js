const tabs = document.querySelectorAll('.accordion');
const panels = document.querySelectorAll('.panel');

tabs.forEach(tab => {
  $(tab).on('click', toggleSelected);
})

function toggleSelected() {
  let tabNum = this.value.split('-')[1];
  let targetPanelClass = `panel-${tabNum}`;
  let currSelectedTab = `.${this.value}`
  tabs.forEach(tab => $(tab).removeClass('selected'));
  panels.forEach(panel => $(panel).removeClass('selected'));
  $(currSelectedTab).addClass('selected');
  $(`.${targetPanelClass}`).addClass('selected');
}
