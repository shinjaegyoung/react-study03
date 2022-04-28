import React from "react";
import './Home.css';

// https://www.w3schools.com/bootstrap5/trybs_template1.htm
function Home(){
    return (
        <div>
            {/* header */}
            <div class="bg-primary text-white text-center p-5">
                <h1>My First bootstrap5 Page</h1>
                <p>반응형 웹 지원됨</p>
            </div>
            {/* nav */}
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <div class="container-fluid">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Active</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#">Link</a>
                        </li>
                        <li class="nav-link">
                            <a class="nav-link" href="#" >Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* main */}
            <div class="container mt-5">
                <div class="row">
                    {/* sidebar */}
                    <div class="col-sm-4">
                        <h2>About me</h2>
                        <h5>Photo of me:</h5>
                        <div className="fakeimg">Fake Image</div>
                        <p>아무런 글자나 입력하시면 됩니다.</p>
                        <h3 class="mt-4">Some Links</h3>
                        <p>아무글자나 입력</p>
                        <ul class="nav nav-pills flex-column">
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Active</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#">Disabled</a>
                            </li>
                        </ul>
                        <hr class="d-sm-none"></hr>
                    </div>
                    {/* maincontent */}
                    <div class="col-sm-8">
                        <h2>Title Heading</h2>
                        <h5>Title description, 2022.4.27</h5>
                        <div className="fakeimg">Fake Images</div>
                        <p>아무글자 입력..</p>
                        <p>평화통일정책의 수립에 관한 대통령의 자문에 응하기 위하여 민주평화통일자문회의를 둘 수 있다.
                            법관은 헌법과 법률에 의하여 그 양심에 따라 독립하여 심판한다.
                        </p>

                        <h2 class="mt-5">제목.</h2>
                        <h5>글 설명, 2022.4.27</h5>
                        <div className="fakeimg">Fake Images</div>
                        <p>아무글자 입력..</p>
                        <p>평화통일정책의 수립에 관한 대통령의 자문에 응하기 위하여 민주평화통일자문회의를 둘 수 있다.
                            법관은 헌법과 법률에 의하여 그 양심에 따라 독립하여 심판한다.
                        </p>

                    </div>
                </div>
            </div>

            {/* footer */}
            <div class="mt-5 p-4 bg-dark text-white text-center">
                <p>Footer</p>
            </div>
        </div>
    )
}

export default Home;

// 문제 1) Home.js Home.css 파일을 활용하여 Home2.js Home2.css 파일을 생성하고 Home.js에 있는 소스의 내용을
// header, main, footer 파일로 구분하여 각각의 파일로 분리하여 저장하고 ,
// Home2.js에서 통합해서 최종 출력하는 프로그램으로 작성하세요