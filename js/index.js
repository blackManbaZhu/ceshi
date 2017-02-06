/**
 * Created by 朱永吉 on 2017/1/24.
 */
window.onload = function() {
    document.getElementById("load").style.display = "none",
        new Swiper("#swiper-container-h",{
            slidesPerView: "auto",
            centeredSlides: !0,
            spaceBetween: 15
        }),
        new Swiper("#swiper-container-v",{
            speed: 850,
            direction: "vertical",
            pagination: ".swiper-pagination",
            nextButton: ".arrow-down",
            // loop: !0,
            mousewheelControl: !0,
            onInit: function(a) {
                a.myactive = 0;
                for (var b = 0; b < a.slides.length; b++)
                    a.slides[b].style.zIndex = 0;
                a.slides[a.myactive].style.zIndex = 1,
                    swiperAnimateCache(a),
                    swiperAnimate(a)
            },
            onTransitionStart: function(a) {
                a.params.onlyExternal = !0
            },
            onTransitionEnd: function(a) {
                a.params.onlyExternal = !1,
                    a.myactive = a.activeIndex;
                for (var b = 0; b < a.slides.length; b++)
                    a.slides[b].style.zIndex = 0;
                a.slides[a.myactive].style.zIndex = 1,
                    swiperAnimate(a)
            },
            watchSlidesProgress: !0,
            onProgress: function(a) {
                var b, c, d, e;
                for (a.myactive || (a.myactive = 0),
                         b = 0; b < a.slides.length; b++)
                    c = a.slides[b],
                        es = c.style,
                        d = c.progress,
                        e = d * a.height,
                        opacity = 0,
                    b == a.myactive && (opacity = 1 - Math.abs(d) / 2),
                    (a.slides[a.myactive].progress > 0 && b == a.myactive + 1 || a.slides[a.myactive].progress < 0 && b == a.myactive - 1) && (opacity = .5 + Math.abs(.5 * a.slides[a.myactive].progress)),
                        c.style.opacity = opacity,
                    b != a.myactive && (es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = "translate3d(0," + e + "px,0)")
            },
            onSetTransition: function(a, b) {
                for (var c = 0; c < a.slides.length; c++)
                    es = a.slides[c].style,
                        es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = b + "ms"
            }
        })
};

// $(function() {
//     var a = new Swiper(".swiper-container",{
//         direction: "vertical",
//         pagination: ".swiper-pagination",
//         nextButton: ".arrow-down",
//         mousewheelControl: true,
//     });
//     a.on("slideChangeStart", function() {
//         var b;
//         switch (a.activeIndex) {
//             case 0:
//             case 1:
//                 b = 1;
//                 break;
//             case 2:
//             case 3:
//             case 4:
//                 b = 2;
//                 break;
//             case 9:
//                 b = 10;
//                 break;
//             default:
//                 b = 3
//         }
//         0 == a.activeIndex && $(".m-topbar").slideDown("slow"),
//             $(".m-nav-btn").find("li[channel ='" + b + "']").addClass("active").siblings().removeClass("active"),
//             10 == b ? $("#nextPage").hide() : $("#nextPage").show()
//     }),
//         a.on("SlideChangeEnd", function() {
//             0 != a.activeIndex && $(".m-topbar").slideUp("slow")
//         }),
//         $(".m-nav-btn").find("li").bind("click", function(b) {
//             switch (b.preventDefault(),
//                 $(this).index()) {
//                 case 0:
//                     a.slideTo(0, 500);
//                     break;
//                 case 1:
//                     a.slideTo(2, 500);
//                     break;
//                 default:
//                     a.slideTo(6, 500)
//             }
//         }),
//         new Swiper(".newslide",{
//             autoplay: 2500
//         });
//     var c = $.ajax({
//         type: "get",
//         dataType: "json",
//         url: "/getNews"
//     });
//     c.done(function(a) {
//         var b = ""
//             , c = "";
//         b += "<div class='news'>",
//             b += "<h1 class='news-tit'>" + a[0].title + "</h1>",
//             b += a[0].content,
//             b += "</div>",
//             c += "<div class='news'>",
//             c += "<h1 class='news-tit'>" + a[1].title + "</h1>",
//             c += a[1].content,
//             c += "</div>",
//             $("#silde1").html(b),
//             $("#silde2").html(c)
//     });
//     var d = $.ajax({
//         type: "get",
//         dataType: "json",
//         url: "/getData"
//     });
//     d.done(function(a) {
//         var b = a[0].bus
//             , d = (a[0].subway,
//             a[0].people)
//             , e = a[0].city;
//         $(".s1-city").html(e).digits(),
//             $(".s1-bus").html(b).digits(),
//             $(".s1-people").html(d).digits()
//     }),
//         $.fn.digits = function() {
//             return this.each(function() {
//                 $(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"))
//             })
//         }
// });

