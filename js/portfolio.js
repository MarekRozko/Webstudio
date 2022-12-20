

class Portfolio {
    projects = [
        {
            img: './images/techno.jpeg',
            title: 'techno',
            catefory: 1,
        },
        {
            img: './images/techno.jpeg',
            title: 'pposter',
            catefory: 3,
        },
        {
            img: './images/techno.jpeg',
            title: 'restorant',
            catefory: 2,
        },
        {
            img: './images/techno.jpeg',
            title: 'ad',
            catefory: 4,
        },
    ];

    categories = [
    {
        id: 1,
        name: 'web',
    },
    {
        id: 2,
        name: 'app',
    },
    {
        id: 3,
        name: 'design',
    },
    {
        id: 4,
        name: 'marketing',
    },
    ];
    
    currentCategory = 0;

    galleryListElem = document.querySelector('.gallery-list');
    buttons = document.querySelectorAll('.button-set__item');

    constructor() {
        this.render();
        this.addButtonListeners();
    }

    addButtonListeners() {
        this.buttons.forEach(button => button.addEventListener('click', this.onClick.bind(this)))
    }

    render() {
        this.galleryListElem.innerHTML = '';

        this.projects
            .filter(project => {
                if (this.currentCategory === 0) return true;
                return project.catefory === this.currentCategory;
            })
            .forEach(project => {
                const category = this.categories.find(category => category.id === project.catefory)
                const li = document.createElement('li');
                li.classList.add('gallery-list__item')
                const content = `
                <a class="gallery-list__link" href="#">
                                <div class="foto-card">
                                    <img class="foto-card__img" src="${project.img}" alt="На компьютере изображены картинки" width="370">
                                    <p class="foto-card__text list"><span class="foto-card__posicion">Технокряк это современная площадка распространения коронавируса. Компании используют эту платформу для цифрового
                                    шпионажа и атак на защищённые сервера конкурентов.</span></p>
                                </div>
                                <div class="frame">
                                    <h2 class="frame__subtitle list">${project.title}</h2>
                                        <p class="frame__text list">${category?.name || '-'}</p>
                                </div>
                                
                            </a>
                `;
                li.innerHTML = content;

                this.galleryListElem.appendChild(li);
            });
    }

    onClick(e) {
        const button = e.target;
        const category = button.dataset['category'];
        this.currentCategory = +category;
        this.render();
    }
}

new Portfolio();