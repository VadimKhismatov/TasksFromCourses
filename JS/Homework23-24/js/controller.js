function Controller(model, view) {
    var self = this;

    view.elements.addBtn.on('click', addItem);
    view.elements.listContainer.on('click', '.item-delete', removeItem);
    view.elements.listContainer.on('click', '.item-edit', editItem);


    function addItem() {
        for (var i = 0; i < model.data.length; i++) {
            var item = model.data[i];

            if (item.id == document.getElementById('input').getAttribute('data-id')) {
                item.text = view.elements.input.val();

                model.addItem(item);
                view.renderList(model.data);
                view.elements.input.val('');
                document.getElementById('input').setAttribute('data-id', '')
                return

            }
        }
        var newItem = {
            id: new Date().getTime(),
            text: view.elements.input.val()
        };

        model.addItem(newItem);
        view.renderList(model.data);
        view.elements.input.val('');





    }

    function removeItem() {
        var item = $(this).attr('data-value');

        model.removeItem(item);
        view.renderList(model.data);
    }

    function editItem() {
        var id = $(this).attr('data-value');
        var input = document.getElementById('input');

        for (var i = 0; i < model.data.length; i++) {
            if (id == model.data[i].id) {

                input.value = model.data[i].text;
                input.setAttribute("data-id", id);

            }
        }



        //view.renderList(model.data);
    }
}