let chaptersData = [];

fetch('https://vedicscriptures.github.io/chapters')
    .then(response => response.json())
    .then(data => {
        chaptersData = data;
        showcard(chaptersData);
    })
    .catch(err => console.log("Fetch error:", err));

function showcard(data) {

    let cards = "";

 data.forEach(chap => {
 cards += `       
     <div class="col-md-6 mb-4">
            <div class="card">
                <div class="card-body">

                    <h6 class="card-subtitle mb-2">
                        Chapter ${chap.chapter_number}
                    </h6>

                    <h5 class="card-title mt-3">
                        ${chap.name}
                    </h5>

                    <p class="card-text mt-4">
                        ${chap.summary && chap.summary.hi
                            ? chap.summary.hi.slice(0, 150) + "..."
                            : "Summary not available"}
                    </p>

                    <p class="card-text mt-4">
                        <i class="bi bi-list-ul me-2"></i>
                        ${chap.verses_count} Verses
                    </p>

                </div>
            </div>
        </div>
 `;
 });

    document.getElementById("chapters").innerHTML = cards;
}


function showChapters(data) {

    let cards = "";

    data.forEach(chap => {
        cards += `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card chapter-card">

                <!-- TOP CHAPTER BAR -->
                <div class="chapter-top">
                    Chapter ${chap.chapter_number}
                </div>

                <div class="card-body">
                    <h5 class="card-title">
                        ${chap.name}
                    </h5>

                    <p class="card-text mt-3">
                        ${chap.summary?.hi?.slice(0, 120) || "Summary not available"}...
                    </p>

                    <p class="mt-3 text-muted">
                        <i class="bi bi-list-ul"></i>
                        ${chap.verses_count} Verses
                    </p>
                </div>
            </div>
        </div>
        `;
    });

    document.getElementById("chapters").innerHTML = cards;
}
