var models = [{
        name: 'Harry Potter ve Felsefe Taşı',
        image: 'img/harrypotter1.jpg',
        link: 'https://www.imdb.com/title/tt0241527/?ref_=nv_sr_srsg_3'
    },
    {
        name: 'Harry Potter ve Sırlar Odası',
        image: 'img/harrypotter2.jpg',
        link: 'https://www.imdb.com/title/tt0295297/?ref_=tt_sims_tti'
    },
    {
        name: 'Harry Potter ve Azkaban Tutsağı',
        image: 'img/harrypotter3.jpg',
        link: 'https://www.imdb.com/title/tt0304141/?ref_=tt_sims_tti'
    },
    {
        name: 'Harry Potter ve Ateş Kadehi',
        image: 'img/harrypotter4.jpg',
        link: 'https://www.imdb.com/title/tt0330373/?ref_=tt_sims_tti'
    },
    {
        name: 'Harry Potter ve Zümrüdüanka Yoldaşlığı',
        image: 'img/harrypotter5.jpg',
        link: 'https://www.imdb.com/title/tt0373889/?ref_=tt_sims_tti'
    },
    {
        name: 'Harry Potter ve Melez Prens',
        image: 'img/harrypotter6.jpg',
        link: 'https://www.imdb.com/title/tt0417741/?ref_=tt_sims_tti'
    },
    {
        name: 'Harry Potter ve Ölüm Yadigarları: Part 1',
        image: 'img/harrypotter7.jpg',
        link: 'https://www.imdb.com/title/tt0926084/?ref_=tt_sims_tti'
    },
    {
        name: 'Harry Potter ve Ölüm Yadigarları: Part 2',
        image: 'img/harrypotter8.jpg',
        link: 'https://www.imdb.com/title/tt1201607/?ref_=nv_sr_srsg_0'
    }

];

var index = 0;
var slideCount = models.length;
var interval;
var settings = {
    duration: '1000',
    random: false //true ile random üretir
}

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click', function () {
    index--;
    showSlide(index);
});
document.querySelector('.fa-arrow-circle-right').addEventListener('click', function () {
    index++;
    showSlide(index);
});
document.querySelectorAll('.arrow').forEach(function (item) {
    item.addEventListener('mouseenter', function () {
        clearInterval(interval);
    })
});
document.querySelectorAll('.arrow').forEach(function (item) {
    item.addEventListener('mouseleave', function () {
        init(settings);
    })
});


function init(settings) {

    var prev;
    interval = setInterval(function () {
        if (settings.random) {
            //random index
            do {
                index = Math.floor(Math.random() * slideCount);
            } while (index == prev)
            prev = index;
        } else {
            //artan index
            if (slideCount == index + 1) {
                index = -1;
            }
            showSlide(index);
            //console.log(index);
            index++;
        }
        showSlide(index);
    }, settings.duration)
}

function showSlide(i) {

    index = i;

    if (i < 0) {
        index = slideCount - 1;
    }
    if (i >= slideCount) {
        index = 0;
    }
    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-img-top').setAttribute('src', models[index].image);
    document.querySelector('.card-link').setAttribute('href', models[index].link);
};
