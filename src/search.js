const form =  document.createElement('form');
const input = document.createElement('input');
const dataList = document.createElement('datalist');
input.setAttribute("list", "history")
input.setAttribute("placeholder", "Search for a photo...")
dataList.setAttribute("id", "history");
form.setAttribute("type", "submit");
form.append(input);
form.append(dataList);

const stateSearchHistory= state => {
    return state.searchHistory.map(i => {
      const option = document.createElement('option');
      option.value = i;
      form.childNodes[1].append(option);
    });
  }

module.exports = form;
module.exports.stateSearchHistory = stateSearchHistory;
