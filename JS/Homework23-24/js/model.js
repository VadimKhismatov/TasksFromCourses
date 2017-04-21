function Model(data) {
    var self = this;

    self.data = data;

    self.addItem = function (item) {
        for (var i = 0; i < self.data.length; i++) {
            if (item.id == self.data[i].id) {
                self.data[i] = item;
                return
            }
        }
        self.data.push(item);


        return self.data;
    };

    self.removeItem = function (id) {
        for (var i = 0; i < self.data.length; i++) {
            if (id == self.data[i].id) {
                self.data.splice(i, 1);
                return
            }
        }


        return self.data;
    };
}