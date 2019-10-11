QUnit.module('MAIN MODULE', {})  // group all these tests together

QUnit.test('TEST largest', assert => {
  assert.equal(largest('prudhvi', 'venkat'), 7, 'String')
  assert.equal(largest('northwest', 'maryville'), 9, 'String')
  assert.equal(largest('webapps', 'java'), 7, 'String')
  assert.equal(largest('database', 'html'), 8, 'String')
  assert.equal(largest('', ''), 5, 'String')

})



QUnit.config.autostart = false  // sync = false; start after loading html

function largest(str1,str2){
    return Math.max(str1.length,str2.length) 
}

window.addEventListener('load', () => {
  const appURL = '../index.html'
  const openingTag = '<main class="container mt-5 flex-fill">'
  const closingTag = '</main>'
  fetch(appURL, { method: 'GET' })
    .then(response => {
      return response.text() // returns promise
    })
    .then(txt => {
      const start = txt.indexOf(openingTag)
      const end = txt.indexOf(closingTag) + closingTag.length
      const html = txt.substring(start, end)
      const qunitFixtureBody = document.getElementById('qunit-fixture')
      qunitFixtureBody.innerHTML = html
      console.info(qunitFixtureBody)
      QUnit.start()
    })
    .catch(error => {
      console.error('error:', error);
      QUnit.start()
    })
})


