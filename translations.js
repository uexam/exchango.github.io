// 간단한 번역 시스템 - 즉시 작동 보장
(function() {
    'use strict';
    
    console.log('🚀 간단한 번역 시스템 시작');
    
    // 완전한 번역 데이터 (내장)
    const translations = {
        ko: {
            title: "About Exchango - Smart Currency Converter",
            heroTitle: "Exchango",
            heroTagline: "똑똑한 환율 계산의 시작",
            statCurrencies: "지원 통화",
            statLanguages: "지원 언어",
            statFree: "무료",
            sectionTitle1: "Exchango란?",
            sectionSubtitle1: "복잡한 환율 계산을 간단하고 직관적으로 만들어주는 스마트 환율 계산기입니다",
            sectionTitle2: "지원 통화",
            sectionSubtitle2: "전 세계 170개 이상의 다양한 통화를 지원합니다",
            sectionTitle3: "주요 기능",
            sectionSubtitle3: "다양한 환율 계산과 편의 기능을 제공합니다",
            sectionTitle4: "기술적 특징",
            sectionSubtitle4: "최신 기술로 구현된 안정적이고 빠른 성능",
            // 통화 카테고리
            categoryMajor: "주요 통화",
            categoryMajorDesc: "세계 경제를 이끄는 주요 통화들",
            categoryAsia: "아시아 통화",
            categoryAsiaDesc: "아시아 각국의 다양한 통화들",
            categoryOther: "기타 지역 통화",
            categoryOtherDesc: "중남미, 아프리카, 오세아니아 통화",
            // 기능 카드들
            feature1Title: "1. 환율 계산기",
            feature1Desc: "기본 환율 계산 기능으로 두 통화 간의 환전을 빠르고 정확하게 계산합니다. 실시간 환율 데이터를 기반으로 신뢰할 수 있는 계산 결과를 제공합니다.",
            feature1Item1: "실시간 환율 적용",
            feature1Item2: "양방향 계산 지원",
            feature1Item3: "즉시 결과 표시",
            feature2Title: "2. 정산 기능",
            feature2Desc: "여행이나 해외 거래 후 복잡한 정산을 간편하게 처리할 수 있습니다. 다양한 통화로 이루어진 거래내역을 체계적으로 관리하고 정산하세요.",
            feature2Item1: "거래내역 기록",
            feature2Item2: "자동 환율 적용",
            feature2Item3: "정산 결과 리포트",
            feature3Title: "3. 환율 현황",
            feature3Desc: "주요 통화들의 실시간 환율 동향을 한눈에 확인할 수 있습니다. 관심 있는 통화의 변동 추이를 모니터링하고 최적의 환전 시기를 파악하세요.",
            feature3Item1: "실시간 환율 현황",
            feature3Item2: "변동률 표시",
            feature3Item3: "즐겨찾기 통화 관리",
            feature4Title: "4. 다통화 계산기",
            feature4Desc: "여러 통화를 동시에 비교하고 계산할 수 있는 고급 기능입니다. 한 번에 여러 통화로 환전 결과를 확인하여 최적의 선택을 도와드립니다.",
            feature4Item1: "다중 통화 동시 계산",
            feature4Item2: "통화 비교 분석",
            feature4Item3: "사용자 맞춤 설정",
            feature5Title: "5. 재미있는 게임",
            feature5Desc: "친구들과 함께 즐길 수 있는 사다리 게임과 룰렛 게임을 제공합니다. 여행지 선택이나 식사 메뉴 결정 등 다양한 상황에서 활용해보세요.",
            feature5Item1: "사다리 & 룰렛 게임",
            feature5Item2: "커스텀 항목 설정",
            feature5Item3: "결과 공유 기능",
            feature6Title: "다국어 지원",
            feature6Desc: "7개 언어를 지원하여 전 세계 사용자가 모국어로 편하게 사용할 수 있습니다. 기기 언어를 자동으로 감지하여 최적의 언어로 표시됩니다.",
            feature6Item1: "7개 언어 지원",
            feature6Item2: "자동 언어 감지",
            feature6Item3: "지역별 숫자 형식",
            // 기술 스택
            techReactNative: "크로스 플랫폼 네이티브 성능",
            techTypeScript: "안정적인 타입 시스템",
            techAsyncStorage: "로컬 데이터 영구 저장",
            techI18next: "다국어 지원 시스템",
            techSmartCaching: "지능형 환율 캐싱",
            techOfflineSupport: "오프라인 모드 지원",
            // 푸터
            footerCopyright: "© 2024 Exchango. All rights reserved.<br>Made with ❤️ for global travelers"
        },
        en: {
            title: "About Exchango - Smart Currency Converter",
            heroTitle: "Exchango",
            heroTagline: "The Start of Smart Currency Conversion",
            statCurrencies: "Supported\nCurrencies",
            statLanguages: "Supported\nLanguages",
            statFree: "Free",
            sectionTitle1: "What is Exchango?",
            sectionSubtitle1: "A smart currency calculator that makes complex currency calculations simple and intuitive",
            sectionTitle2: "Supported Currencies",
            sectionSubtitle2: "Support for over 170 different currencies worldwide",
            sectionTitle3: "Main Features",
            sectionSubtitle3: "Provides various currency calculations and convenience features",
            sectionTitle4: "Technical Features",
            sectionSubtitle4: "Stable and fast performance implemented with latest technology",
            // 통화 카테고리
            categoryMajor: "Major Currencies",
            categoryMajorDesc: "Leading currencies that drive the global economy",
            categoryAsia: "Asian Currencies",
            categoryAsiaDesc: "Various currencies from Asian countries",
            categoryOther: "Other Regional Currencies",
            categoryOtherDesc: "Latin America, Africa, and Oceania currencies",
            // 기능 카드들
            feature1Title: "1. Currency Calculator",
            feature1Desc: "Basic currency calculation function that quickly and accurately calculates exchanges between two currencies. Provides reliable calculation results based on real-time exchange rate data.",
            feature1Item1: "Real-time exchange rate application",
            feature1Item2: "Bidirectional calculation support",
            feature1Item3: "Instant result display",
            feature2Title: "2. Settlement Function",
            feature2Desc: "Easily handle complex settlements after travel or overseas transactions. Systematically manage and settle transaction histories made in various currencies.",
            feature2Item1: "Transaction history recording",
            feature2Item2: "Automatic exchange rate application",
            feature2Item3: "Settlement result report",
            feature3Title: "3. Exchange Rate Status",
            feature3Desc: "Check real-time exchange rate trends of major currencies at a glance. Monitor fluctuation trends of currencies of interest and identify optimal exchange timing.",
            feature3Item1: "Real-time exchange rate status",
            feature3Item2: "Fluctuation rate display",
            feature3Item3: "Favorite currency management",
            feature4Title: "4. Multi-Currency Calculator",
            feature4Desc: "An advanced feature that allows simultaneous comparison and calculation of multiple currencies. Check exchange results in multiple currencies at once to help you make optimal choices.",
            feature4Item1: "Simultaneous multi-currency calculation",
            feature4Item2: "Currency comparison analysis",
            feature4Item3: "User customization",
            feature5Title: "5. Fun Games",
            feature5Desc: "Provides ladder games and roulette games to enjoy with friends. Use them in various situations such as choosing travel destinations or deciding meal menus.",
            feature5Item1: "Ladder & Roulette games",
            feature5Item2: "Custom item settings",
            feature5Item3: "Result sharing function",
            feature6Title: "Multilingual Support",
            feature6Desc: "Supports 7 languages so users worldwide can use it comfortably in their native language. Automatically detects device language and displays in optimal language.",
            feature6Item1: "7 language support",
            feature6Item2: "Automatic language detection",
            feature6Item3: "Regional number format",
            // 기술 스택
            techReactNative: "Cross-platform native performance",
            techTypeScript: "Stable type system",
            techAsyncStorage: "Local data permanent storage",
            techI18next: "Multilingual support system",
            techSmartCaching: "Intelligent exchange rate caching",
            techOfflineSupport: "Offline mode support",
            // 푸터
            footerCopyright: "© 2024 Exchango. All rights reserved.<br>Made with ❤️ for global travelers"
        },
        ja: {
            title: "Exchango について - スマート通貨コンバーター",
            heroTitle: "Exchango",
            heroTagline: "スマートな為替計算の始まり",
            statCurrencies: "対応通貨",
            statLanguages: "対応言語",
            statFree: "無料",
            sectionTitle1: "Exchangoとは？",
            sectionSubtitle1: "複雑な為替計算をシンプルで直感的にするスマート為替計算機です",
            sectionTitle2: "対応通貨",
            sectionSubtitle2: "世界170以上の様々な通貨をサポート",
            sectionTitle3: "主な機能",
            sectionSubtitle3: "様々な為替計算と便利機能を提供",
            sectionTitle4: "技術的特徴",
            sectionSubtitle4: "最新技術で実装された安定で高速なパフォーマンス",
            // 통화 카테고리
            categoryMajor: "主要通貨",
            categoryMajorDesc: "世界経済を牽引する主要通貨",
            categoryAsia: "アジア通貨",
            categoryAsiaDesc: "アジア各国の様々な通貨",
            categoryOther: "その他地域通貨",
            categoryOtherDesc: "中南米、アフリカ、オセアニア通貨",
            // 기능 카드들
            feature1Title: "1. 為替計算機",
            feature1Desc: "基本的な為替計算機能で、2つの通貨間の両替を迅速かつ正確に計算します。リアルタイムの為替レートデータに基づいて信頼できる計算結果を提供します。",
            feature1Item1: "リアルタイム為替レート適用",
            feature1Item2: "双方向計算サポート",
            feature1Item3: "即座の結果表示",
            feature2Title: "2. 精算機能",
            feature2Desc: "旅行や海外取引後の複雑な精算を簡単に処理できます。様々な通貨で行われた取引履歴を体系的に管理し精算しましょう。",
            feature2Item1: "取引履歴記録",
            feature2Item2: "自動為替レート適用",
            feature2Item3: "精算結果レポート",
            feature3Title: "3. 為替レート状況",
            feature3Desc: "主要通貨のリアルタイム為替レート動向を一目で確認できます。関心のある通貨の変動推移をモニタリングし最適な両替時期を把握しましょう。",
            feature3Item1: "リアルタイム為替レート状況",
            feature3Item2: "変動率表示",
            feature3Item3: "お気に入り通貨管理",
            feature4Title: "4. 多通貨計算機",
            feature4Desc: "複数の通貨を同時に比較・計算できる高度な機能です。一度に複数の通貨での両替結果を確認し最適な選択をサポートします。",
            feature4Item1: "多通貨同時計算",
            feature4Item2: "通貨比較分析",
            feature4Item3: "ユーザーカスタム設定",
            feature5Title: "5. 楽しいゲーム",
            feature5Desc: "友達と一緒に楽しめるはしごゲームとルーレットゲームを提供します。旅行先選択や食事メニュー決定など様々な場面で活用してください。",
            feature5Item1: "はしご＆ルーレットゲーム",
            feature5Item2: "カスタム項目設定",
            feature5Item3: "結果共有機能",
            feature6Title: "多言語サポート",
            feature6Desc: "7言語をサポートし、世界中のユーザーが母国語で快適に使用できます。デバイス言語を自動検出し最適な言語で表示されます。",
            feature6Item1: "7言語サポート",
            feature6Item2: "自動言語検出",
            feature6Item3: "地域別数字フォーマット",
            // 기술 스택
            techReactNative: "クロスプラットフォームネイティブパフォーマンス",
            techTypeScript: "安定したタイプシステム",
            techAsyncStorage: "ローカルデータ永続保存",
            techI18next: "多言語サポートシステム",
            techSmartCaching: "インテリジェント為替レートキャッシング",
            techOfflineSupport: "オフラインモードサポート",
            // 푸터
            footerCopyright: "© 2024 Exchango. 全著作権所有。<br>世界の旅行者のために❤️で作られました"
        },
        zh: {
            title: "关于 Exchango - 智能货币转换器",
            heroTitle: "Exchango",
            heroTagline: "智能汇率计算的开始",
            statCurrencies: "支持货币",
            statLanguages: "支持语言",
            statFree: "免费",
            sectionTitle1: "什么是 Exchango？",
            sectionSubtitle1: "一个智能汇率计算器，让复杂的汇率计算变得简单直观",
            sectionTitle2: "支持货币",
            sectionSubtitle2: "支持全球170多种不同货币",
            sectionTitle3: "主要功能",
            sectionSubtitle3: "提供各种汇率计算和便利功能",
            sectionTitle4: "技术特征",
            sectionSubtitle4: "采用最新技术实现的稳定快速性能",
            // 통화 카테고리
            categoryMajor: "主要货币",
            categoryMajorDesc: "推动全球经济的主要货币",
            categoryAsia: "亚洲货币",
            categoryAsiaDesc: "亚洲各国的各种货币",
            categoryOther: "其他地区货币",
            categoryOtherDesc: "拉丁美洲、非洲和大洋洲货币",
            // 기능 카드들
            feature1Title: "1. 汇率计算器",
            feature1Desc: "基本汇率计算功能，快速准确地计算两种货币之间的兑换。基于实时汇率数据提供可靠的计算结果。",
            feature1Item1: "实时汇率应用",
            feature1Item2: "双向计算支持",
            feature1Item3: "即时结果显示",
            feature2Title: "2. 结算功能",
            feature2Desc: "旅行或海外交易后轻松处理复杂结算。系统化管理和结算各种货币的交易记录。",
            feature2Item1: "交易记录记录",
            feature2Item2: "自动汇率应用",
            feature2Item3: "结算结果报告",
            feature3Title: "3. 汇率状况",
            feature3Desc: "一目了然地查看主要货币的实时汇率趋势。监控感兴趣货币的波动趋势，识别最佳兑换时机。",
            feature3Item1: "实时汇率状况",
            feature3Item2: "波动率显示",
            feature3Item3: "收藏货币管理",
            feature4Title: "4. 多货币计算器",
            feature4Desc: "可以同时比较和计算多种货币的高级功能。一次查看多种货币的兑换结果，帮助您做出最佳选择。",
            feature4Item1: "多货币同时计算",
            feature4Item2: "货币比较分析",
            feature4Item3: "用户自定义设置",
            feature5Title: "5. 有趣的游戏",
            feature5Desc: "提供与朋友一起享受的梯子游戏和轮盘游戏。在选择旅行目的地或决定餐食菜单等各种情况下使用。",
            feature5Item1: "梯子和轮盘游戏",
            feature5Item2: "自定义项目设置",
            feature5Item3: "结果分享功能",
            feature6Title: "多语言支持",
            feature6Desc: "支持7种语言，让全球用户可以用母语舒适地使用。自动检测设备语言并以最佳语言显示。",
            feature6Item1: "7种语言支持",
            feature6Item2: "自动语言检测",
            feature6Item3: "地区数字格式",
            // 기술 스택
            techReactNative: "跨平台原生性能",
            techTypeScript: "稳定的类型系统",
            techAsyncStorage: "本地数据永久存储",
            techI18next: "多语言支持系统",
            techSmartCaching: "智能汇率缓存",
            techOfflineSupport: "离线模式支持",
            // 푸터
            footerCopyright: "© 2024 Exchango. 版权所有。<br>用❤️为全球旅行者制作"
        }
    };
    
    let currentLang = 'ko';
    
    // 텍스트 적용 헬퍼 함수 (줄바꿈 지원)
    function applyText(element, text) {
        if (!element || !text) return;
        
        if (text.includes('\n')) {
            element.innerHTML = text.replace(/\n/g, '<br>');
        } else {
            element.textContent = text;
        }
    }
    
    // URL에서 언어 감지
    function detectLanguage() {
        try {
            const urlParams = new URLSearchParams(window.location.search);
            const lang = urlParams.get('lang');
            if (lang && translations[lang]) {
                currentLang = lang;
                console.log(`🌍 언어 감지: ${lang}`);
                return true;
            }
        } catch (error) {
            console.error('URL 파싱 오류:', error);
        }
        return false;
    }
    
    // 완전한 번역 적용
    function applyTranslations() {
        const t = translations[currentLang];
        console.log(`🔄 번역 적용: ${currentLang}`);
        
        try {
            // 페이지 제목
            document.title = t.title;
            document.documentElement.lang = currentLang;
            
            // 히어로 섹션
            const heroTitle = document.querySelector('.hero h1');
            const heroTagline = document.querySelector('.hero .tagline');
            
            if (heroTitle) {
                applyText(heroTitle, t.heroTitle);
                console.log(`📝 제목 변경: ${t.heroTitle}`);
            }
            
            if (heroTagline) {
                applyText(heroTagline, t.heroTagline);
                console.log(`📝 태그라인 변경: ${t.heroTagline}`);
            }
            
            // 통계 라벨
            const statLabels = document.querySelectorAll('.stat-label');
            const statTexts = [t.statCurrencies, t.statLanguages, t.statFree];
            
            statLabels.forEach((label, index) => {
                if (statTexts[index]) {
                    applyText(label, statTexts[index]);
                }
            });
            
            // 섹션 제목들
            const sections = document.querySelectorAll('.section');
            
            // 첫 번째 섹션 (Exchango란?)
            if (sections[0]) {
                const title = sections[0].querySelector('h2');
                const subtitle = sections[0].querySelector('.section-subtitle');
                if (title) applyText(title, t.sectionTitle1);
                if (subtitle) applyText(subtitle, t.sectionSubtitle1);
            }
            
            // 번호가 있는 섹션들
            sections.forEach(section => {
                const numberEl = section.querySelector('.section-number');
                const titleEl = section.querySelector('h2');
                const subtitleEl = section.querySelector('.section-subtitle');
                
                if (numberEl && titleEl) {
                    const num = numberEl.textContent.trim();
                    if (num === '1') {
                        applyText(titleEl, t.sectionTitle2);
                        if (subtitleEl) applyText(subtitleEl, t.sectionSubtitle2);
                    }
                    else if (num === '2') {
                        applyText(titleEl, t.sectionTitle3);
                        if (subtitleEl) applyText(subtitleEl, t.sectionSubtitle3);
                    }
                    else if (num === '3') {
                        applyText(titleEl, t.sectionTitle4);
                        if (subtitleEl) applyText(subtitleEl, t.sectionSubtitle4);
                    }
                }
            });
            
            // 통화 카테고리
            const categories = document.querySelectorAll('.currency-category');
            const categoryKeys = ['categoryMajor', 'categoryAsia', 'categoryOther'];
            const categoryDescKeys = ['categoryMajorDesc', 'categoryAsiaDesc', 'categoryOtherDesc'];
            
            categories.forEach((category, index) => {
                const titleEl = category.querySelector('.category-title');
                const descEl = category.querySelector('.category-description');
                
                if (titleEl && categoryKeys[index]) {
                    applyText(titleEl, t[categoryKeys[index]]);
                }
                if (descEl && categoryDescKeys[index]) {
                    applyText(descEl, t[categoryDescKeys[index]]);
                }
            });
            
            // 기능 카드들
            const featureCards = document.querySelectorAll('.feature-card');
            const featureKeys = [
                'feature1', 'feature2', 'feature3', 'feature4', 'feature5', 'feature6'
            ];
            
            featureCards.forEach((card, index) => {
                const key = featureKeys[index];
                if (!key) return;
                
                const titleEl = card.querySelector('h3');
                const descEl = card.querySelector('.feature-description');
                const detailSpans = card.querySelectorAll('.feature-detail-item span:not(.detail-check)');
                
                if (titleEl) applyText(titleEl, t[key + 'Title']);
                if (descEl) applyText(descEl, t[key + 'Desc']);
                
                // 세부 기능들
                detailSpans.forEach((span, detailIndex) => {
                    const itemKey = key + 'Item' + (detailIndex + 1);
                    if (t[itemKey]) {
                        applyText(span, t[itemKey]);
                    }
                });
            });
            
            // 기술 스택
            const techItems = document.querySelectorAll('.tech-item');
            const techKeys = [
                'techReactNative', 'techTypeScript', 'techAsyncStorage', 
                'techI18next', 'techSmartCaching', 'techOfflineSupport'
            ];
            
            techItems.forEach((item, index) => {
                const key = techKeys[index];
                if (key && t[key]) {
                    const descEl = item.querySelector('.tech-description');
                    if (descEl) {
                        applyText(descEl, t[key]);
                    }
                }
            });
            
            // 푸터
            const footerCopyright = document.querySelector('.footer-copyright');
            if (footerCopyright && t.footerCopyright) {
                footerCopyright.innerHTML = t.footerCopyright;
            }
            
            // 언어 버튼 상태 업데이트
            updateLanguageButtons();
            
            console.log('✅ 번역 적용 완료 - 모든 요소 번역됨');
            
        } catch (error) {
            console.error('❌ 번역 적용 오류:', error);
        }
    }
    
    // 언어 버튼 상태 업데이트
    function updateLanguageButtons() {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(button => {
            const lang = button.getAttribute('data-lang');
            if (lang === currentLang) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
    
    // 언어 변경
    function changeLanguage(newLang) {
        if (!translations[newLang]) {
            console.error(`지원하지 않는 언어: ${newLang}`);
            return;
        }
        
        console.log(`🔄 언어 변경: ${currentLang} → ${newLang}`);
        currentLang = newLang;
        
        // URL 업데이트
        try {
            const url = new URL(window.location);
            url.searchParams.set('lang', newLang);
            window.history.pushState({}, '', url);
        } catch (error) {
            console.error('URL 업데이트 오류:', error);
        }
        
        // 번역 적용
        applyTranslations();
    }
    
    // 언어 버튼 이벤트 설정
    function setupLanguageButtons() {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = button.getAttribute('data-lang');
                if (lang && lang !== currentLang) {
                    changeLanguage(lang);
                }
            });
        });
        console.log('🔘 언어 버튼 설정 완료');
    }
    
    // 초기화
    function init() {
        console.log('🎯 초기화 시작');
        
        // 언어 감지
        detectLanguage();
        
        // DOM이 준비되면 실행
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                setupLanguageButtons();
                applyTranslations();
            });
        } else {
            setupLanguageButtons();
            applyTranslations();
        }
        
        // 브라우저 히스토리 이벤트
        window.addEventListener('popstate', () => {
            detectLanguage();
            applyTranslations();
        });
    }
    
    // 전역 함수로 노출
    window.simpleTranslation = {
        changeLanguage: changeLanguage,
        getCurrentLanguage: () => currentLang,
        getSupportedLanguages: () => Object.keys(translations)
    };
    
    // 즉시 실행
    init();
    
})();
