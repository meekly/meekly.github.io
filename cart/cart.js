document.addEventListener('DOMContentLoaded', () => {
    let ids = ['sdd', 'hdd', 'usbdrive'];
    fetch('https://kodaktor.ru/cart_data.json')
        .then(response => response.json())
        .then(json => {
            ids.forEach(itemId => {
                $('#'+itemId+' .cost .price').html(json[itemId]);
                $('#'+itemId).attr('price', json[itemId]);
            });
        });

    window.cart = new (function(balance) {
        this.balance = balance;
    }) (0);

    function updateBalance(newBalance) {
        window.cart.balance = newBalance;
        $('.cart .overall .total').html(window.cart.balance);
    }

    updateBalance(350);

    function addItemToList(item) {
        let existingItems = $('.cart .item-list').find('#'+$(item).attr('id'));

        if (existingItems.length == 0) {
            $('.cart .item-list').append($(item));
            $(item).find('.remove').show('fast');
            $(item).find('.remove').click(() => {
                let count = parseInt($(item).find('.count').html());
                if (count > 2) {
                    count--;
                } else if (count == 2) {
                    count = ''
                } else {
                    count = '';
                    $(item).remove();
                }
                $(item).find('.count').html(count);
                updateBalance(window.cart.balance + +$(item).attr('price'));
            });
        } else {
            let existing = existingItems[0];
            $(existing).find('.count').show('fast');
            let count = parseInt($(existing).find('.count').html());
            if (!count) {
                count = 2;
            } else {
                count++;
            }

            $(existing).find('.count').html(count);
        }
    }

    function notItemOnCart(item, position) {
        let cartPosition = $('.cart').position();

        return position.top + $(item).height() < cartPosition.top
            || position.left + $(item).width() < cartPosition.left
            || cartPosition.top + $('.cart').height() < position.top
            || cartPosition.left + $('.cart').width() < position.left;
    }

    function handleAdd(item, position) {
        let cartPosition = $('.cart').position();

        if (notItemOnCart(item, position)) { return }

        $('.cart').css('background-color', 'white');

        if (window.cart.balance >= $(item).attr('price')) {
            let n = item.cloneNode(true);
            addItemToList(item.cloneNode(true));
            updateBalance(window.cart.balance - $(item).attr('price'));
        }
    }

    function handleDrag(item, position) {
        if (notItemOnCart(item,position)) {
            $('.cart').css('background-color', 'white');
            return;
        }

        if (window.cart.balance < $(item).attr('price')) {
            $('.cart').css('background-color', 'red');
            return;
        }

        $('.cart').css('background-color', '#90ee90');
    }

    ids.forEach((itemId) => {
        $('#' + itemId).draggable({
            revert: true,
            helper: 'clone',
            stop: function(e, ui) {
                handleAdd(e.target, ui.position);
            },
            drag: function(e, ui) {
                handleDrag(e.target, ui.position);
            }
        });
    });
});
