function savePose() {
    const motors = [1,2,3,4,5,6].map(i => document.getElementById('m'+i).value);
    fetch('get_run_pose.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `motor1=${motors[0]}&motor2=${motors[1]}&motor3=${motors[2]}&motor4=${motors[3]}&motor5=${motors[4]}&motor6=${motors[5]}`
    }).then(res => res.text()).then(data => alert(data));
  }
  
  function getPoses() {
    fetch('get_run_pose.php')
      .then(res => res.json())
      .then(data => {
        let table = '<table border="1"><tr><th>ID</th><th>Motors</th><th>Status</th></tr>';
        data.forEach(row => {
          table += `<tr><td>${row.id}</td><td>${row.motor1},${row.motor2},${row.motor3},${row.motor4},${row.motor5},${row.motor6}</td><td>${row.status}</td></tr>`;
        });
        table += '</table>';
        document.getElementById('poseTable').innerHTML = table;
      });
  }
  