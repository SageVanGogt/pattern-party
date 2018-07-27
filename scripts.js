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

const accTabs = document.getElementsByClassName("accordion-mobile");

for (let i = 0; i < accTabs.length; i++) {
    accTabs[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
