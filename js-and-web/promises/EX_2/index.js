function processFile(filename, processingTime) {
  return new Promise((resolve, reject) => {
    console.log(`Starting to process ${filename}...`);

    setTimeout(() => {
      // 15% chance of failure for realistic simulation
      if (Math.random() < 0.15) {
        reject(new Error(`Failed to process ${filename}`));
      } else {
        const result = {
          filename: filename,
          size: Math.floor(Math.random() * 1000) + 100, // Random size
          processedAt: new Date().toLocaleTimeString(),
        };
        console.log(`✓ Completed ${filename}`);
        resolve(result);
      }
    }, processingTime);
  });
}

// TODO: Use Promise.all() to process these files concurrently:
const files = [
  { name: "document1.pdf", time: 2000 },
  { name: "image1.jpg", time: 1500 },
  { name: "data.csv", time: 3000 },
  { name: "report.docx", time: 1000 },
];


// Bonus: Try Promise.allSettled() to see results even if some files fail

let promises = [];
for (item of files) {
  promises.push(processFile(item.name, item.time));
}


function timeToSeconds(t)
{
  const [h, m, s] = t.split(':').map(Number);
  return h * 3600 + m * 60 + s;
}


function secondsToTime(sec) {
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;

  return [
    String(h).padStart(2, '0'),
    String(m).padStart(2, '0'),
    String(s).padStart(2, '0')
  ].join(':');
}


Promise.allSettled(promises)
  .then((result) => {
    let totalSeconds = 0;
    for (item of result){
      if(item.value) totalSeconds += timeToSeconds(item.value.processedAt);
    }
    console.log(`Total processing time: ${secondsToTime(totalSeconds)}`);
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });
