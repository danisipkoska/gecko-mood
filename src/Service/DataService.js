export default class DataService {
  get(offset = 0, limit = 0) {
    let list = [];
    try {
      list = JSON.parse(localStorage.getItem("emotionList"));
    } catch (error) {
      console.info("List is empty");
      return [];
    }

    if (offset >= list.length) return [];
    let exportList = [];
    for (let i = offset; i < list.length; i++) {
      exportList.push(list[i]);
      if (exportList.length >= limit && limit !== 0) break;
    }
    return exportList;
  }

  set(sentence = null, emotion = null) {
    if (sentence === null || emotion === null) {
      console.error("sentence & emotion are required arguments");
    }
    let list = localStorage.getItem("emotionList");

    if (list === null) {
      list = [];
      list.push({ sentence, emotion });
    } else {
      list = JSON.parse(list);
      list.push({ sentence, emotion });
    }
    localStorage.setItem("emotionList", JSON.stringify(list));
  }
}
