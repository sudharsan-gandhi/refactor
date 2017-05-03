/**
 * ProjectController
 *
 * @description :: Server-side logic for managing Projects
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'new':function(req,res) {
		// body...
		res.view();
	},
	create:function(req,res,next){
		console.log(JSON.stringify(req.params.all()));
		Project.create(req.params.all(),function createProject(err,project){
			if(err) {
				req.session.err={err:err};
				res.redirect('/');
			};
			
			res.redirect('/project/show/'+project.id);	
		});

	},
	show:function(req,res) {
		// body...
		Project.findOne(req.param('id'),function getProject(err,project){
			if(err){
				req.session.err={err:err};
				res.redirect('/');
			};
			res.view({
				project:project
			});
		});
	}
};

