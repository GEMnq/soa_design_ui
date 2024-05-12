function toggleSearchInput() {
    const button = document.getElementById("search-button");
    const icon = document.getElementById("search-icon");
    const input = document.getElementById("search");

    if (button.style.display === "block") {
        button.style.display = "none";
        icon.style.display = "block";
        input.placeholder = "       Search";
    } else {
        button.style.display = "block";
        icon.style.display = "none";
        input.placeholder = "";
    }
}

function showProfileGroupIcon(element) {
    const [icon] = element.querySelectorAll("span.fas");

    if (icon.style.display === "block") {
        icon.style.display = "none";
    } else {
        icon.style.display = "block";
    }
}

function toggleProfileGroupList(icon) {
    const list = icon.parentElement.nextElementSibling;
    const link = list.nextElementSibling;

    if (icon.className === "fas fa-angle-up") {
        icon.className = "fas fa-angle-down";
        list.style.display = "none";
        if (link) {
            link.style.display = "none";
        }
    } else {
        icon.className = "fas fa-angle-up";
        list.style.display = "block";
        if (link) {
            link.style.display = "block";
        }
    }
}

function showRecommendationsInfo(element) {
    const [div, span, square] = element.children;

    if (div.style.display === "block") {
        div.style.display = "none";
        span.style.display = "none";
        square.style.display = "none";
    } else {
        div.style.display = "block";
        span.style.display = "block";
        square.style.display = "block";
    }
}

function waitPageLoading() {
    setTimeout(function() {
        const loadingPage = document.getElementById("loading-page");
        const [container] = document.getElementsByClassName("container");
        const header = document.getElementById("main-header").firstElementChild;

        loadingPage.style.display = "none";
        header.style.display = "flex";
        container.style.display = "grid";

        const leftAside = document.getElementById('left-aside');
        const listBusiness  = document.getElementById('list-business');
        const listFriendStudent = document.getElementById('list-friend-student');
        const listLecturer = document.getElementById('list-lecturer');


        loadListBusiness(listBusiness)
        loadListFriendStudent(listFriendStudent)
        loadListLecturer(listLecturer)
        loadListAddFriend(leftAside)
        const buttonContainerAddFrt = document.querySelectorAll(".btn-addfri")
        const buttonContainerFollow = document.querySelectorAll(".btn-follow")

        buttonContainerFollow.forEach(button => {
            button.addEventListener('click', (e) => {
                renderListAddFriend(e, leftAside, 1);
            });
        });

        buttonContainerAddFrt.forEach(button => {
            button.addEventListener('click', (e) => {
                renderListAddFriend(e, leftAside, 2);
            });
        });
        
        
        if (navigator.appVersion.indexOf("Chrome/") != -1) {
            const profileName = document.getElementById("profile-name");
            const postAuthorName = document.getElementById("post-author-name");

            const profileSquare = document.getElementById("profile-square");

            const elements = [profileName, postAuthorName];

            // console.log(elements);

            elements.map((element) => {
                element.classList.add("letter-spacing");
            });

            // profileSquare.classList.add("font-16");
        }
       
    }, 2000);

}

window.addEventListener("scroll", (e) => {
    const profileGroup = document.getElementById("profile-groups");
    const linkedinSection = document.getElementById("linkedin-section");
    const rightAside = document.getElementById("right-aside");

    if (window.scrollY > 356) {
        profileGroup.classList.add("position-fixed");
        linkedinSection.classList.add("position-fixed", "right-aside-fixed");
        rightAside.classList.add("vanish");
    } else {
        profileGroup.classList.remove("position-fixed");
        linkedinSection.classList.remove("position-fixed", "right-aside-fixed");
        rightAside.classList.remove("vanish");
    }
});

function loadListBusiness(listBusiness) {
    let html = '';
    const dataList = [
        { id: 0, name: 'Hybrid', infor: 'Hybrid SOFTWARE', follower: "2,122,03"},
        { id: 1, name: 'Hybrid', infor: 'Hybrid SOFTWARE', follower: "2,033,03"},
        { id: 2, name: 'Hybrid', infor: 'Hybrid SOFTWARE', follower: "34,440,03"},
        { id: 3, name: 'Hybrid', infor: 'Hybrid SOFTWARE', follower: "203,33"}, 
    ];

    dataList.forEach(item => {
        html += `
        <div class="card-container">
            <div class="upper-container">
                <div class="image-container">
                    <img src="images/hybrid.jpeg" />
                </div>
            </div>
            <div class="lower-container">
                <div>
                    <div class="lower-container-header">${item.name}</div>
                    <div class="lower-container-job">${item.infor}</div>
                </div>
                <div>
                    <p>${item.follower} followers
                    </p>
                </div>
                <div class="btn-container">
                    <a href="#" class="btn-follow" data-name="${item.name}" data-infor="${item.infor}" data-follower="${item.follower}">Add Friend</a>
                </div>
            </div>
        </div> 
            `;
    });
    listBusiness.innerHTML = html;
}

function loadListFriendStudent(listFriendStudent) {
    let html = '';
    const dataList = [
        { id: 0, name: 'Minh Ngọc', infor: 'Sinh viên khoa CNTT', follower: "2003"},
        { id: 1, name: 'Thanh Trúc', infor: 'Sinh viên khoa CNTT', follower: "123,23"},
        { id: 2, name: 'Thanh Trúc', infor: 'Sinh viên khoa CNTT', follower: "123,23"},
        { id: 3, name: 'Thanh Trúc', infor: 'Sinh viên khoa CNTT', follower: "123,23"},
    ];

    dataList.forEach(item => {
        html += `
        <div class="card-container">
            <div class="upper-container">
                <div class="image-container">
                    <img src="images/gmail-3.png" />
                </div>
            </div>
            <div class="lower-container">
                <div>
                    <div class="lower-container-header">${item.name}</div>
                    <div class="lower-container-job">${item.infor}</div>
                </div>
                <div>
                    <p>${item.follower} followers
                    </p>
                </div>
                <div class="btn-container">
                    <a href="#" class="btn-addfri" data-name="${item.name}" data-infor="${item.infor}" data-follower="${item.follower}">Add Friend</a>
                </div>
            </div>
        </div> 
            `;
    });
    listFriendStudent.innerHTML = html;
}

function loadListLecturer(listLecturer) {
    let html = '';
    const dataList = [
        { id: 0, name: 'Dương Hữu Phúc', infor: 'Giảng viên khoa CNTT', follower: '1,233,22'},
        { id: 1, name: 'Nguyễn Thành An', infor: 'Giảng viên khoa CNTT', follower: '113,323,23'},
    ];

    dataList.forEach(item => {
        html += `
        <div class="card-container">
            <div class="upper-container">
                <div class="image-container">
                    <img src="images/gmail-3.png" />
                </div>
            </div>
            <div class="lower-container">
                <div>
                    <div class="lower-container-header">${item.name}</div>
                    <div class="lower-container-job">${item.infor}</div>
                </div>
                <div>
                    <p>${item.follower} followers
                    </p>
                </div>
                <div class="btn-container">
                    <a href="#" class="btn-addfri" data-name="${item.name}" data-infor="${item.infor}" data-follower="${item.follower}">Add Friend</a>
                </div>
            </div>
        </div> 
            `;
    });
    listLecturer.innerHTML = html;
}

function loadListAddFriend(leftAside) {
    let html = '';
    const dataListBusiness = [
        { id: 0, name: 'FPT', infor: 'FPT SOFTWARE', follower: "2,122,03"},        
        { id: 0, name: 'FPT', infor: 'FPT SOFTWARE', follower: "2,122,03"},        
    ];

    const dataListFriend = [
        { id: 0, name: 'Minh Ngọc', infor: 'Sinh viên khoa CNTT', follower: "2003"},
        { id: 1, name: 'Thanh Trúc', infor: 'Sinh viên khoa CNTT', follower: "123,23"},
    ];

    dataListBusiness.forEach(item => {
        html += `
            <div id="profile-card">
                <div id="profile-info">
                    <img
                        src="images/FPT.png"
                        alt="Profile picture"
                    />
                    <div id="profile-info_">
                        <strong id="profile-name"
                            >${item.name}</strong
                        >
                        <img
                            src="images/check.png"
                            alt="Profile picture"
                        />
                        <small>${item.infor}</small>                       
                    </div>
                </div>
                <div id="profile-links">
                    <a href="#">
                        <span>
                            Connections
                        </span>
                        <span class="profile-number">
                        ${item.follower}
                        </span>
                    </a>
                </div>
            </div>
        `;
    });
    dataListFriend.forEach(item => {
    html += `
                <div id="profile-card">
                    <div id="profile-info">
                        <img
                            src="images/gmail-3.png"
                            alt="Profile picture"
                        />
                        <div id="profile-info_">
                            <strong id="profile-name"
                                >${item.name}</strong
                            >
                            <small>${item.infor}</small>
                        </div>
                    </div>
                    <div id="profile-links">
                        <a href="#">
                            <span>
                                Connections
                            </span>
                            <span class="profile-number">
                            ${item.follower}
                            </span>
                        </a>
                    </div>
                </div>
            `;
    });
    leftAside.innerHTML = html;
}

function renderListAddFriend(e, leftAside, flag) {  
    const name = e.target.getAttribute('data-name');
    const infor = e.target.getAttribute('data-infor'); 
    const follower = e.target.getAttribute('data-follower'); 

    const dataListBusiness = [
        { id: 0, name: 'FPT', infor: 'FPT SOFTWARE', follower: "2,122,03"},        
        { id: 0, name: 'FPT', infor: 'FPT SOFTWARE', follower: "2,122,03"},     
    ];

    const dataListFriend = [
        { id: 0, name: 'Minh Ngọc', infor: 'Sinh viên khoa CNTT', follower: "2003"},
        { id: 1, name: 'Thanh Trúc', infor: 'Sinh viên khoa CNTT', follower: "123,23"},
    ];

    let html = '';
    if (flag == 1) {
        html += `
                <div id="profile-card">
                    <div id="profile-info">
                        <img
                            src="images/hybrid.jpeg"
                            alt="Profile picture"
                        />
                        <div id="profile-info_">
                            <strong id="profile-name"
                                >${name}</strong
                            >
                            <img
                                src="images/check.png"
                                alt="Profile picture"
                            />
                            <small>${infor}</small>
                        </div>
                    </div>
                    <div id="profile-links">
                        <a href="#">
                            <span>
                                Connections
                            </span>
                            <span class="profile-number">
                                ${follower}
                            </span>
                        </a>
                    </div>
                </div>
            `;
    }
    dataListBusiness.forEach(item => {
        html += `
            <div id="profile-card">
                <div id="profile-info">
                    <img
                        src="images/FPT.png"
                        alt="Profile picture"
                    />
                    <div id="profile-info_">
                        <strong id="profile-name"
                            >${item.name}</strong
                        >
                        <img
                            src="images/check.png"
                            alt="Profile picture"
                        />
                        <small>${item.infor}</small>
                    </div>
                </div>
                <div id="profile-links">
                    <a href="#">
                        <span>
                            Connections
                        </span>
                        <span class="profile-number">
                        ${item.follower}
                        </span>
                    </a>
                </div>
            </div>
        `;
    });

    if (flag == 2) {
        html += `
                <div id="profile-card">
                    <div id="profile-info">
                        <img
                            src="images/gmail-3.png"
                            alt="Profile picture"
                        />
                        <div id="profile-info_">
                            <strong id="profile-name"
                                >${name}</strong
                            >
                            <small>${infor}</small>
                        </div>
                    </div>
                    <div id="profile-links">
                        <a href="#">
                            <span>
                                Connections
                            </span>
                            <span class="profile-number">
                                ${follower}
                            </span>
                        </a>
                    </div>
                </div>
            `;
    }

    dataListFriend.forEach(item => {
            html += `
                <div id="profile-card">
                    <div id="profile-info">
                        <img
                            src="images/gmail-3.png"
                            alt="Profile picture"
                        />
                        <div id="profile-info_">
                            <strong id="profile-name"
                                >${item.name}</strong
                            >
                            <small>${item.infor}</small>
                        </div>
                    </div>
                    <div id="profile-links">
                        <a href="#">
                            <span>
                                Connections
                            </span>
                            <span class="profile-number">
                            ${item.follower}
                            </span>
                        </a>
                    </div>
                </div>
            `;
    });

    
    leftAside.innerHTML = html;
}

waitPageLoading();
