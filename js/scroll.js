// btnをクリックするとスクロール移動
function fnMove(seq) {
    var offset = $("#div" + seq).size() ? $("#div" + seq).offset() : 0;
    $("html, body").animate({ scrollTop: offset.top }, 400);
  }

// btnをクリックするとclass追加
$(document).on("click", "button", function (e) {
e.preventDefault(); // 基本的に定義されたイベントを作動させないメソッド
// .siblings()オブジェクトと同じ位置にあるすべてのオブジェクト(自分以外の兄弟要素)を検索するメソッド
$(this).addClass("active").siblings().removeClass("active");

fnMove($(this).data("n"));
});