$(function () {
    const strPool = 'assets/images/gallery/Pool/';
    const strRes = 'assets/images/gallery/Restaurant/';
    const strR = '.jpg';
    const imgs = [
        {
            descripcion: 'Swimming Pool View',
            titulo: '',
            url: strPool + 'DSC_4476' + strR,
        },
        {
            descripcion: 'Swimming Pool View',
            titulo: '',
            url: strPool + 'DSC_4554' + strR,
        },
        {
            descripcion: 'Swimming Pool View',
            titulo: '',
            url: strPool + 'DSC_4555' + strR,
        },     
        {
            descripcion: 'Swimming Pool View',
            titulo: '',
            url: strPool + 'DSC_4560' + strR,
        },
        {
            descripcion: 'Swimming Pool View',
            titulo: '',
            url: strPool + 'DSC_4561' + strR,
        },
        {
            descripcion: 'Swimming Pool Night View',
            titulo: '',
            url: strPool + 'DSC_4626' + strR,
        },
        {
            descripcion: 'Swimming Pool Night View',
            titulo: '',
            url: strPool + 'DSC_4649' + strR,
        },
    ]

    const resImgs = [
        {
            descripcion: 'Restaurant View',
            titulo: '',
            url: strRes + 'DSC_4442' + strR,
        },
        {
            descripcion: 'Restaurant View',
            titulo: '',
            url: strRes + 'DSC_4448' + strR,
        },
        {
            descripcion: 'Restaurant View',
            titulo: '',
            url: strRes + 'DSC_4449' + strR,
        },
        {
            descripcion: 'Restaurant View',
            titulo: '',
            url: strRes + 'DSC_4450' + strR,
        },
        {
            descripcion: 'Restaurant View',
            titulo: '',
            url: strRes + 'DSC_4460' + strR,
        },
        {
            descripcion: 'Restaurant View',
            titulo: '',
            url: strRes + 'DSC_4465' + strR,
        },
        {
            descripcion: 'Restaurant View',
            titulo: '',
            url: strRes + 'DSC_4467' + strR,
        },
        {
            descripcion: 'Restaurant View',
            titulo: '',
            url: strRes + 'DSC_4579' + strR,
        },
        {
            descripcion: 'Restaurant View',
            titulo: '',
            url: strRes + 'DSC_4673' + strR,
        },
        {
            descripcion: 'Restaurant Night View',
            titulo: '',
            url: strRes + 'DSC_4674' + strR,
        },
        {
            descripcion: 'Restaurant View',
            titulo: '',
            url: strRes + 'DSC_4692' + strR,
        },
        {
            descripcion: 'Restaurant Night View',
            titulo: '',
            url: strRes + 'DSC_4697' + strR,
        },
        {
            descripcion: 'Restaurant Night View',
            titulo: '',
            url: strRes + 'DSC_4714' + strR,
        },
        {
            descripcion: 'Restaurant View',
            titulo: '',
            url: strRes + 'DSC_4742' + strR,
        },
    ]

    $.each(imgs, function (i, img) {
        $('.galeria .contenedorImgs').append(`
      <div class="imagen" style="background-image:url('${img.url}')">
        <p class="nombre">${img.titulo}</p>
      </div>`
        );
    })

    $.each(resImgs, function (i, img) {
        $('.galeria .resImgs').append(`
      <div class="imagen" style="background-image:url('${img.url}')">
        <p class="nombre">${img.titulo}</p>
      </div>`
        );
    })

    setTimeout(() => {
        $('.galeria').addClass('vis');
    }, 1000)
    $('.galeria').on('click', '.contenedorImgs .imagen', function () {
        var imagen = imgs[$(this).index()].url;
        var titulo = imgs[$(this).index()].titulo;
        var descripcion = imgs[$(this).index()].descripcion;
        $('.galeria').addClass('scale');
        $(this).addClass('activa');
        if (!$('.fullPreview').length) {
            $('body').append(`
        <div class="fullPreview">
          <div class="cerrarModal"></div>
          <div class="wrapper">
            <div class="blur" style="background-image:url(${imagen})"></div>
            <p class="titulo">${titulo}</p>
            <img src="${imagen}">
            <p class="desc">${descripcion}</p>
          </div>
          <div class="controles">
            <div class="control av"></div>
            <div class="control ret"></div>
          </div>
        </div>`
            )
            $('.fullPreview').fadeIn().css('display', 'flex');
        }
    })

    $('.galeria').on('click', '.resImgs .imagen', function () {
        var imagen = resImgs[$(this).index()].url;
        var titulo = resImgs[$(this).index()].titulo;
        var descripcion = resImgs[$(this).index()].descripcion;
        $('.galeria').addClass('scale');
        $(this).addClass('activa');
        if (!$('.fullPreview').length) {
            $('body').append(`
        <div class="fullPreview">
          <div class="cerrarModal"></div>
          <div class="wrapper">
            <div class="blur" style="background-image:url(${imagen})"></div>
            <p class="titulo">${titulo}</p>
            <img src="${imagen}">
            <p class="desc">${descripcion}</p>
          </div>
          <div class="controles">
            <div class="control av"></div>
            <div class="control ret"></div>
          </div>
        </div>`
            )
            $('.fullPreview').fadeIn().css('display', 'flex');
        }
    })

    $('body').on('click', '.fullPreview .cerrarModal', function () {
        $('.contenedorImgs .imagen.activa').removeClass('activa');
        $('.resImgs .imagen.activa').removeClass('activa');
        $('.galeria').removeClass('scale');
        $(this).parent().fadeOut(function () {
            $(this).remove();
        })
    })
    $('body').on('click', '.fullPreview .control', function () {
        var activa = $('.contenedorImgs .imagen.activa');
        var index;
        if ($(this).hasClass('av')) {
            index = activa.next().index();
            if (index < 0) index = 0;
        } else {
            index = activa.prev().index();
            if (index < 0) index = imgs.length - 1;
        }

        var activaRes = $('.resImgs .imagen.activa');
        var index;
        if ($(this).hasClass('av')) {
            index = activaRes.next().index();
            if (index < 0) index = 0;
        } else {
            index = activaRes.prev().index();
            if (index < 0) index = resImgs.length - 1;
        }
        $('.fullPreview').addClass('anim');
        setTimeout(() => {
            $('.contenedorImgs .imagen.activa').removeClass('activa');
            $('.contenedorImgs .imagen').eq(index).addClass('activa');            
            $('.fullPreview').find('.blur').css('background-image', 'url(' + imgs[index].url + ')');
            $('.fullPreview').find('img').attr('src', imgs[index].url);
            $('.fullPreview').find('.titulo').text(imgs[index].titulo);
            $('.fullPreview').find('.desc').text(imgs[index].descripcion);
            $('.fullPreview').removeClass('anim');
        }, 500)

        setTimeout(() => {
            $('.resImgs .imagen.activa').removeClass('activa');
            $('.resImgs .imagen').eq(index).addClass('activa');
            $('.fullPreview').find('.blur').css('background-image', 'url(' + resImgs[index].url + ')');
            $('.fullPreview').find('img').attr('src', resImgs[index].url);
            $('.fullPreview').find('.titulo').text(resImgs[index].titulo);
            $('.fullPreview').find('.desc').text(resImgs[index].descripcion);
            $('.fullPreview').removeClass('anim');
        }, 500)
    })
})