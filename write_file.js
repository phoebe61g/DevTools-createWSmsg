/* Write a string array into a file. */ 
async function writeToFile(filename, strings) {
  try {
    const content = strings.join('\n');
    const handle = await window.showSaveFilePicker({ suggestedName: filename });
    const writableStream = await handle.createWritable();
    await writableStream.write(content);
    await writableStream.close();
    console.log('Data has been written to file.');
  } catch (error) {
    console.error('Error writing to file:', error);
  }
}
const filename = "TimeMeasure.txt";
writeToFile(filename, timelog);
