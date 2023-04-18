Template.pagesHome.onCreated(function () {


});

Template.pagesHome.onRendered(function () {

});

Template.pagesHome.onDestroyed(function () {

});

Template.pagesHome.helpers({
    upperCase: function (name) {
        return name.toUpperCase()
    },
    eq: function (v1, v2) {
        return v1 == v2
    }
});

Template.pagesHome.events({
    'click .brd-btn-click': function (event, template) {
        event.preventDefault()
        console.log(event);
        console.log(template);

        alert("İlk tıklama")
    }
});