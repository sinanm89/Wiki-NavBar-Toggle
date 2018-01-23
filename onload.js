   
// (function readTable() {
console.log('I AM TRYING TO SAVE THE TABLES ON THE PAGE');
// Get a value
document.getElementsByClassName('ng-scope selected adsDashTreeButton')[0].click();
// get key columns
var column_key_names = document.querySelectorAll('[id^=gridcolumn-] span');
var output = ['Name'];
// get values of each column
for(let j=0; j<column_key_names.length-1; j++){
  output.push(column_key_names[j].innerText);
}
console.log(output);
var column_values = document.querySelectorAll('[id^=treeview-] tbody tr td');
// seek out children, go deep.
for(let i=0; i<column_values.length-1; i++){
    if(i !== 0 && (i%column_key_names.length) !== 0){
      output.push(column_values[i].innerText);
    // } else {
      // output.append('\n')
    }
    
}
// Save it using the Chrome extension storage API.
chrome.storage.local.set({'page_data': output}, function() {
  // Notify that we saved.
  console.log('Settings saved');
});
