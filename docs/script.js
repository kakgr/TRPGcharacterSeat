function addCustomStat() {
  const section = document.getElementById("customStats");
  const wrapper = document.createElement("div");
  wrapper.className = "input-block";

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.placeholder = "項目名（例: 血液型）";
  nameInput.className = "input-name";

  const valueInput = document.createElement("input");
  valueInput.type = "text";
  valueInput.placeholder = "値（例: AB型）";
  valueInput.className = "input-value";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖ 削除";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => wrapper.remove();

  wrapper.appendChild(nameInput);
  wrapper.appendChild(valueInput);
  wrapper.appendChild(deleteBtn);
  section.appendChild(wrapper);
}


function addInput(sectionId) {
  const section = document.getElementById(sectionId);
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "入力...";
  section.appendChild(input);
}

function addNameAndDescription(sectionId) {
  const section = document.getElementById(sectionId);
  const wrapper = document.createElement("div");
  wrapper.className = "input-block";

  // 横並びの行：名前 + 数値
  const topRow = document.createElement("div");
  topRow.className = "top-row";

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.placeholder = "名前（例：ファイアボール）";
  nameInput.className = "input-name";

  const valueInput = document.createElement("input");
  valueInput.type = "number";
  valueInput.placeholder = "数値（例：30）";
  valueInput.className = "input-value";

  topRow.appendChild(nameInput);
  topRow.appendChild(valueInput);

  // 説明欄
  const descTextarea = document.createElement("textarea");
  descTextarea.rows = 3;
  descTextarea.placeholder = "説明文（例：敵に火の玉を投げる基本魔法）";
  descTextarea.className = "input-desc";

  // 削除ボタン
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖ 削除";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => wrapper.remove();

  // 全部まとめて追加
  wrapper.appendChild(topRow);
  wrapper.appendChild(descTextarea);
  wrapper.appendChild(deleteBtn);
  section.appendChild(wrapper);
}


function addTextarea(sectionId) {
  const section = document.getElementById(sectionId);
  const wrapper = document.createElement("div");
  wrapper.className = "input-block";

  const textarea = document.createElement("textarea");
  textarea.rows = 4;
  textarea.placeholder = "キャラの背景やストーリーを記入...";
  textarea.className = "input-desc";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖ 削除";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => wrapper.remove();

  wrapper.appendChild(textarea);
  wrapper.appendChild(deleteBtn);
  section.appendChild(wrapper);
}

function saveData() {
  const skills = [];
  document.querySelectorAll("#skills .input-block").forEach(block => {
    const name = block.querySelector(".input-name")?.value || "";
    const value = block.querySelector(".input-value")?.value || "";
    const desc = block.querySelector(".input-desc")?.value || "";
    skills.push({ name, value, desc });
  });

  const data = { skills }; // 今は技能だけ（持ち物なども追加可）
  localStorage.setItem("characterData", JSON.stringify(data));
  alert("保存しました！");
}

function loadData() {
  const data = JSON.parse(localStorage.getItem("characterData"));
  if (!data) return alert("保存されたデータが見つかりません");

  const skillsContainer = document.getElementById("skills");
  skillsContainer.innerHTML = ""; // 一度リセット

  data.skills.forEach(skill => {
    const wrapper = document.createElement("div");
    wrapper.className = "input-block";

    const topRow = document.createElement("div");
    topRow.className = "top-row";

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = skill.name;
    nameInput.className = "input-name";

    const valueInput = document.createElement("input");
    valueInput.type = "number";
    valueInput.value = skill.value;
    valueInput.className = "input-value";

    topRow.appendChild(nameInput);
    topRow.appendChild(valueInput);

    const descTextarea = document.createElement("textarea");
    descTextarea.rows = 3;
    descTextarea.value = skill.desc;
    descTextarea.className = "input-desc";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖ 削除";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => wrapper.remove();

    wrapper.appendChild(topRow);
    wrapper.appendChild(descTextarea);
    wrapper.appendChild(deleteBtn);
    skillsContainer.appendChild(wrapper);
  });
}
