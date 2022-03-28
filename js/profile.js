
let follow = document.querySelector('#follow');
let followCount = document.querySelector('#followCount')

follow.addEventListener("click", toggleFollow);

function toggleFollow() {
    let f = parseInt(followCount.innerHTML);

    switch (follow.value) {
        case 'follow':
            f++
            follow.value = 'following';
            break;

        case 'following':
            f--
            follow.value = 'follow';
            break;
    }

    followCount.innerHTML = f;
}
