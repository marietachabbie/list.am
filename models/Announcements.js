const Schema = mongoose.Schema;

const AnnouncementSchema = new Schema({
    
});
const PostModel = mongoose.model('Posts', PostSchema);

PostModel.create(posts, function (err) {
    if (err) return handleError(err);
    console.log('Posts is created!');
});

// 15737110
const assignAnnNumber = function(annList, startNumber){
    for(let i = 0; i < annList.length; i++){
        annList[i][postNumber] = startNumber + i;
    }
}
