$(function(){
  var Marquee = Backbone.Model.extend({
    defaults: function() {
      return {
        message: "Empty Marquee",
        fg_color: "#000000",
        bg_color: "#ffffff",
      };
    },
  })  

  var MarqueeList =  Backbone.Collection.extend({
    model: Marquee,
  });

  var Marquees = new MarqueeList;

  //Single Marquee view
  var MarqueeView = Backbone.View.extend({
    template: _.template($('#marquee_template').html()),

    
    events: {
      "click marquee" : "edit",
      "keypress .editor" : "onEnterPress",
      "click .ok": "update",
      "click .cancel": "cancel",

    },

    initialize: function() {
      this.listenTo(this.model, 'change', this.render);
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      this.$editor = this.$('.editor');
      this.$editor.hide();
      this.$marquee = this.$('marquee');
      this.$message = this.$('.message');
      this.$fg_color = this.$('.fg_color');
      this.$bg_color = this.$('.bg_color');
      return this;
    },

    edit: function () {
      this.$marquee.hide();
      this.$editor.show();
    },

    cancel: function() {
      this.$marquee.show();
      this.$editor.hide();
    },

    onEnterPress: function(e) {
      if (e.keyCode == 13) this.update();
    },
    update: function () {
      this.model.save({
        message: this.$message.val(),
        fg_color: this.$fg_color.val(),
        bg_color: this.$bg_color.val(),
      })
    },
  });

  //Full Aplication view
 
  var AppView =  Backbone.View.extend({
    el: $("#app"),
    events: {
      "dblclick": "newMarquee",
    },

    initialize: function() {
      this.listenTo(Marquees, 'add', this.addOne); 
    },

    addOne: function(marquee) {
      var view = new MarqueeView({model: marquee});
      this.$el.append(view.render().el);
      return view;
    },
    newMarquee: function() {
      Marquees.create({message: 'Click on marquee to edit'});
    }, 
  });

  var App = new AppView;
  Marquees.create({message: "Hello World"});
  Marquees.create({message: "Color Test", bg_color: "#ff0000", fg_color: "#00ff00"});
});
