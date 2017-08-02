const axios = require('axios')
const cheerio = require('cheerio')
const Nightmare = require('nightmare');

const fetchInstagram = function(instagramId) {
  return new Promise((resolve, reject) => {
    Nightmare({ show: true })
      .goto(`https://www.instagram.com/${instagramId}`)
      .evaluate(() => document.querySelectorAll('a')[12].click())
      .scrollTo(999999, 0)
      .wait(500)
      .scrollTo(999999, 0)
      .wait(500)
      .scrollTo(999999, 0)
      .wait(500)
      // .scrollTo(999999, 0)
      // .wait(500)
      // .scrollTo(999999, 0)
      // .wait(500)
      // .scrollTo(999999, 0)
      // .wait(500)
      // .scrollTo(999999, 0)
      // .wait(500)
      // .scrollTo(999999, 0)
      // .wait(500)
      // .scrollTo(999999, 0)
      // .wait(500)
      // .scrollTo(999999, 0)
      // .wait(500)
      // .scrollTo(999999, 0)
      // .wait(500)
      // .scrollTo(999999, 0)
      // .wait(500)
      // .scrollTo(999999, 0)
      // .wait(500)
      // .scrollTo(999999, 0)
      // .wait(500)
      // .scrollTo(999999, 0)
      // .wait(500)
      // .scrollTo(999999, 0)
      // .wait(500)
      // .scrollTo(999999, 0)
      // .wait(500)
      // .scrollTo(999999, 0)
      // .wait(500)
      // .scrollTo(999999, 0)
      // .wait(500)
      // .scrollTo(999999, 0)
      // .wait(500)
      // .scrollTo(999999, 0)
      // .wait(500)
      // .scrollTo(999999, 0)
      // .wait(500)
      // .scrollTo(999999, 0)
      // .wait(500)
      // .scrollTo(999999, 0)
      // .wait(500)
      // .scrollTo(999999, 0)
      // .wait(500)
      // .scrollTo(999999, 0)
      // .wait(500)
      // .scrollTo(999999, 0)
      // .wait(500)
      // .scrollTo(999999, 0)
      // .wait(500)
      .evaluate(function () {
        let images = []
        document.querySelectorAll('img').forEach(image => images.push({
          url: image.src,
          title: image.alt
        }))
        return images
      })
      .end()
      .then(function (result) {
        console.log('fetched', result.length, 'images')
        resolve(result)
      })
      .catch(function (error) {
        console.error('Search failed:', error)
        reject(error)
      })
  })
}

module.exports = fetchInstagram
