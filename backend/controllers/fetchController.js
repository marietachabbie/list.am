let fetchModel= require('../models/fetchModel');

module.exports={
    fetchData: function(req, res){
        fetchModel.fetchData(function(data){
            res.render('announcements-table', {
                            AnnouncementsData: data
                        });
        })
    }
}
