import React from "react";
import PropTypes from 'prop-types';

//FontAwesome主程式
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
//FontAwesome引用圖片
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faBuilding } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
library.add(faRegularHeart, faBookmark, faBuilding, faBars);

const Header = props => {
	return (
	<header>
		<div className="left">
			<div className="burger">
				<FontAwesomeIcon className="icon" icon={['fas','bars']}/>
			</div>
			<div className="logo">
				<div className="snail"></div>
				<h2>SNAIL HEAVEN</h2>
			</div>
			<input type="text" placeholder="小蝸牛想住哪？"/>
		</div>
		<div className="right">
			<div className="searchFav">
				<FontAwesomeIcon className="icon" icon={["far","bookmark"]}/>
				<p>儲存搜尋條件</p>
			</div>
			<div className="searchFav" onClick={props.goLoveListPage}>
				<FontAwesomeIcon className="icon" icon={['far','heart']}/>
				<p>我的最愛</p>
			</div>
			<div className="postHouse">
				<FontAwesomeIcon className="icon" icon={['far','building']}/>
				<p>提供租屋</p>
				<div className="signButton">登入</div>
			</div>
		</div>
	</header>
	)	
}


export default Header;
