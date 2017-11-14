<?php
/*
２つの文字列がアナグラムであることを判別するプログラム
*/
function blnAnagram($param1, $param2) {
	if (mb_strlen($param1) === mb_strlen($param2) && mb_strlen($param1)>0) {
		$ary1 = sort(explode($param1));
		$ary2 = sort(explode($param2));
		for ($i=0;$i<count($ary1);$i++) {
			if ($ary1[$i] != $ary2[$i]) {
				return false;
			}
		}
		return true;
	} else {
		return false;
	}
}

/*
銀行の窓口Aと窓口Bがあり、窓口Aは１対応につき4分。窓口Bは１対応につき7分かかる。
この時30分の間で何名のお客様の対応ができるかプログラムで出力せよ。
*/

echo intCountService(4,7,30);
function intCountService($intTakeTimeA, $intTakeTimeB, $intLimit) {
	$count = 0;
	for ($i=1;$i<=$intLimit;$i++) {
		if ($i % $intTakeTimeA === 0) {
			$count++;
		}
		if ($i % $intTakeTimeB === 0) {
			$count++;
		}
	}
	return $count;
}

?>