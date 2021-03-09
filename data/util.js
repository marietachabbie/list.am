module.exports = {
    currentNumberOfAnnouncements: 15737110,
    assignAnnouncementNumber: function(annList, startNumber){
        for(let i = 0; i < annList.length; i++){
            annList[i]['postNumber'] = startNumber + i;
        }
    },
}
