Page({
  data:{ phone:'' },
  onLoad(){ this.setData({ phone: wx.getStorageSync('phone') || '' }) }
});
