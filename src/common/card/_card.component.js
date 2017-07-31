
import template from './_card.template.html';
import styles from './_card.scss';

class Card {
    constructor($element) {
        'ngInject';
        this.$element = $element;
        this.$element.addClass(styles.card);
    }

    $onInit() {

    }
}

export default {
    template,
    controller : Card
}