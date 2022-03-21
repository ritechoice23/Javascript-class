let follow = document.querySelector('#follow');
let followCount = document.querySelector('#followCount')

// follow.addEventListener('onclick', 'toggleFollow');

function toggleFollow() {

    switch (follow.value) {
        case 'follow':
            follow.value = 'following';
            increaseFollowCount();
            break;

        case 'following':
            follow.value = 'follow';
            decreaseFollowCount();
            break;
    }
}

function increaseFollowCount() {
    let f = parseInt(followCount.innerHTML);
    console.log(f++)
    followCount.innerHTML = f++;
}

function decreaseFollowCount() {
    let f = parseInt(followCount.innerHTML);
    console.log(f--)
    followCount.innerHTML = f--;
}