function randomString(e) {
    for (var a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ", t = "", o = "", n = 0; n < 8; n++) {
        var r = Math.floor(Math.random() * a.length);
        t += a.substring(r, r + 1);
    }
    for (var i = document.getElementById(e), l = t.toString().replace(/\B(?=(?:.{4})+(?!.))/g, "-"), n = 0; n < 4; n++) {
        var s = Math.floor(Math.random() * "X".length);
        o += "X".substring(s, s + 1);
    }
    i.innerHTML = l + "-" + o;
}

particlesJS("particles-js", {
    particles: {
        number: {
            value: 80,
            density: {
                enable: !0,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: .5,
            random: !1,
            anim: {
                enable: !1,
                speed: 1,
                opacity_min: .1,
                sync: !1
            }
        },
        size: {
            value: 3,
            random: !0,
            anim: {
                enable: !1,
                speed: 40,
                size_min: .1,
                sync: !1
            }
        },
        line_linked: {
            enable: !0,
            distance: 150,
            color: "#ffffff",
            opacity: .4,
            width: 1
        },
        move: {
            enable: !0,
            speed: 3,
            direction: "none",
            random: !1,
            straight: !1,
            out_mode: "out",
            bounce: !1,
            attract: {
                enable: !1,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: !1,
                mode: "bubble"
            },
            onclick: {
                enable: !1,
                mode: "push"
            },
            resize: !0
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: .4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: !0
}), $(".card-value").click(function() {
    $("#card").val($(this).attr("data-value")), $(".card-value").removeClass("gift-active"),
    $(this).addClass("gift-active");
}), $(".generate").click(function() {
    if ("" != $.trim($("#card").val())) if ($("input.anon").prop("checked")) {
        $("#modal-console").modal({
            backdrop: "static",
            keyboard: !1,
            show: !0
        });

        var e = 0, a = $("#codes");
        a.shuffleLetters({
            text: "Initialising..."
        });
        hack.forEach(function(part, index, theArray) {
            var e = $("#card").val();
            var a = $("#region").val();
            if (part.indexOf("{server}") !== -1) {
                theArray[index] = part.replace("{server}", a);
            }
            if (part.indexOf("{card}") !== -1) {
                theArray[index] = part.replace("{card}", e);
            }

        });
        var t = setInterval(function() {
            a.shuffleLetters({
                text: hack[e]
            }), ++e >= hack.length && (randomString("code-print"), $(".info-msg").removeClass("display-none"),
            $(".consol-btn-holder").removeClass("display-none"), clearInterval(t));
        }, 3e3);
    } else $("#modal-alert").modal("show"), $(".error").html('Before accesing to the generator you must tick the box to agree to our <a href="#" >terms and conditions</a>  and  <a href="#" >privacy policy</a>'); else $("#modal-alert").modal("show"),
    $(".error").html("Please Choose Card Value!");
}), $("#online").text(Math.floor(2e3 * Math.random() + 4)), setTimeout(function() {
    $(".mainBtn").addClass("pulse-shadow");
}, 4e3);
