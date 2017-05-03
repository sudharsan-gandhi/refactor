/**
 * VersionController
 *
 * @description :: Server-side logic for managing Versions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'new':function(req,res,next){
		Project.findOne(req.param('id'),function(err,project){
			if(err) res.redirect('/');
			res.view({
				project:project
			});
		})
	},
	create:function(req,res,next){
		Version.create(req.params.all(),function(err,version){
			if(err) res.redirect('/');
			res.redirect('version/versions/'+version.id);
		});
	},
	show:function(req,res,next){
		Version.findOne(req.param('id'),function(err,version){
			if(err) res.redirect('/');
			res.view({
				version:version
			});
		});
	},
	versions:function(req,res,next){
		Project.findOne(req.param('id')).populate('version').exec(function(err,project_version){
			if(err) res.redirect('/');
			console.log(JSON.stringify(project_version));
			res.view({
				project_version:project_version
			});
		});
	}
};

