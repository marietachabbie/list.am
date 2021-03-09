module.exports = {
    currentNumberOfAnnouncements: 15737110,
    assignAnnouncementNumber: (annList, startNumber) => {
        for(let i = 0; i < annList.length; i++){
            annList[i]['postNumber'] = startNumber + i;
        }
    },
}
