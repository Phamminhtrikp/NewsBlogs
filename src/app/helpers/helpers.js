module.exports = {
    sum: (a, b) => a + b,
    sortable: (field, sort) => {

        const sortType = field === sort.column ? sort.type : 'default';

        const icons = {
            default: 'fa-solid fa-sort',
            asc: 'fa-solid fa-arrow-down-short-wide',
            desc: 'fa-solid fa-arrow-down-wide-short',
        };

        const types = {
            default: 'desc',
            asc: 'desc',
            desc: 'asc',
        };

        const type = types[sortType];
        const icon = icons[sortType];


        const output = ` <a href="?_sort&column=${field}&type=${type}">
                    <i class="${icon}"></i>
        </a>`;
        return output;
    },
    copyrightYear: () => {
        return new Date().getFullYear();
    }
}