function getMinMax(str) { 
  return {
  min: Math.min(...str.split(' ').filter(item => (!isNaN(item) ? item : false))),
  max: Math.max(...str.split(' ').filter(item => (!isNaN(item) ? item : false)))
  }
}
