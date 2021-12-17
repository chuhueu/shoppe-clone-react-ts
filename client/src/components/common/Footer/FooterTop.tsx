import React from "react";
import { Box, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        styleWrapper: {
            borderBottom: "1px solid rgba(0,0,0,0.2)",
            maxWidth: "1240px",
            padding: "50 24px",
            margin: "0 auto",
        },
        styleSpace1: {
            height: "10px",
        },
        styleSpace2: {
            height: "15px",
        },
    })
);

const FooterTop = () => {
    const classes = useStyles();
    return (
        <Box className={classes.styleWrapper}>
            <Typography variant="caption">
                SHOPEE - GÌ CŨNG CÓ, MUA HẾT Ở SHOPEE
            </Typography>
            <Box className={classes.styleSpace2}></Box>
            <Typography variant="body2">
                Shopee - ứng dụng mua sắm trực tuyến thú vị, tin cậy, an toàn và
                miễn phí! Shopee là nền tảng giao dịch trực tuyến hàng đầu ở
                Đông Nam Á, Việt Nam,<Link to="/">Singapore</Link> ,
                <Link to="/">Malaysia</Link> ,<Link to="/">Indonesia</Link> ,
                Thái Lan, Philipin, Đài loan và Brazil. Với sự đảm bảo của
                Shopee, bạn sẽ mua hàng trực tuyến an tâm và nhanh chóng hơn bao
                giờ hết!
            </Typography>
            <Box className={classes.styleSpace2}></Box>
            <Typography variant="caption">
                MUA SẮM VÀ BÁN HÀNG ONLINE ĐƠN GIẢN, NHANH CHÓNG VÀ AN TOÀN
            </Typography>
            <Box className={classes.styleSpace2}></Box>
            <Typography variant="body2">
                Nếu bạn đang tìm kiếm một trang web để mua và bán hàng trực
                tuyến thì Shopee.vn là một sự lựa chọn tuyệt vời dành cho bạn.
                Bản chất của Shopee là một social E-commerce platform - nền tảng
                trang web thương mại điện tử tích hợp mạng xã hội. Điều này cho
                phép người mua và người bán hàng dễ dàng tương tác, trao đổi
                thông tin về sản phẩm và chương trình khuyến mãi của shop. Nhờ
                nền tảng đó, việc mua bán trên Shopee trở nên nhanh chóng và đơn
                giản hơn. Bạn có thể trò chuyện trực tiếp với nhà bán hàng để
                hỏi trực tiếp về mặt hàng cần mua. Còn nếu bạn muốn tìm mua
                những dòng sản phẩm chính hãng, uy tín, Shopee Mall chính là sự
                lựa chọn lí tưởng dành cho bạn. Để bạn có thể dễ dàng khi tìm
                hiểu và sử dụng sản phẩm, Shopee Blog - trang blog thông tin
                chính thức của Shopee - sẽ giúp bạn có thể tìm được cho mình các
                kiến thức về xu hướng thời trang, review công nghệ, mẹo làm đẹp,
                tin tức tiêu dùng và deal giá tốt bất ngờ.
            </Typography>
            <Box className={classes.styleSpace1}></Box>
            <Typography variant="body2">
                Đến với Shopee, cơ hội để trở thành một nhà bán hàng dễ dàng hơn
                bao giờ hết. Chỉ với vài thao tác trên ứng dụng, bạn đã có thể
                đăng bán ngay những sản phẩm của mình. Không những thế, các nhà
                bán hàng có thể tự tạo chương trình khuyến mãi trên Shopee để
                thu hút người mua với những sản phẩm có mức giá hấp dẫn. Khi
                đăng nhập tại Shopee Kênh người bán, bạn có thể dễ dàng phân
                loại sản phẩm, theo dõi đơn hàng, chăm sóc khách hàng và cập
                nhập ngay các hoạt động của shop.
            </Typography>
            <Box className={classes.styleSpace2}></Box>
            <Typography variant="caption">
                TẢI ỨNG DỤNG SHOPEE NGAY ĐỂ MUA BÁN ONLINE MỌI LÚC, MỌI NƠI
            </Typography>
            <Box className={classes.styleSpace2}></Box>
            <Typography variant="body2">
                Ưu điểm của ứng dụng Shopee là cho phép bạn mua và bán hàng mọi
                lúc, mọi nơi. Bạn có thể tải ứng dụng Shopee cũng như đăng sản
                phẩm bán hàng một cách nhanh chóng và tiện lợi. Ngoài ra, ứng
                dụng Shopee còn có những ưu điểm sau: - Giao diện thân thiện,
                đơn giản, dễ sử dụng. Bạn sẽ dễ dàng thấy được ngay những sản
                phẩm nổi bật cũng như dễ dàng tìm đến các ô tìm kiếm, giỏ hàng
                hoặc tính năng chat liền tay. - Ứng dụng tích hợp công nghệ quản
                lý đơn mua và bán hàng tiện lợi trên cùng một tài khoản. Bạn sẽ
                vừa là người mua hàng, vừa là người bán hàng rất linh hoạt, dễ
                dàng. - Cập nhập thông tin khuyến mãi, Shopee flash sale nhanh
                chóng và liên tục. Tại Shopee, bạn có thể lấy các mã giảm giá
                Shopee và mã miễn phí vận chuyển toàn quốc. Bên cạnh đó, Shopee
                cũng sẽ có những chiến dịch khuyến mãi lớn hằng năm như Siêu hội
                mua sắm 4.4, Shopee 9.9 sale, Shopee 10.10 sale, Shopee 11.11
                sale, Shopee 12.12 sale, Shopee Tết Sale. Đây là thời điểm để
                người mua hàng có thể nhanh tay chọn ngay cho mình những mặt
                hàng ưa thích với mức giá giảm kỉ lục.
            </Typography>
            <Box className={classes.styleSpace2}></Box>
            <Typography variant="caption">
                MUA HÀNG HIỆU CAO CẤP GIÁ TỐT TẠI SHOPEE
            </Typography>
            <Box className={classes.styleSpace2}></Box>
            <Typography variant="body2">
                Bên cạnh Shopee Premium, Shopee còn có rất nhiều khuyến mãi
                khủng cho hàng hiệu giảm đến 50%. Cộng với mã giao hàng miễn
                phí, Shopee cũng có các mã giảm giá được phân phối mỗi tháng từ
                rất nhiều gian hàng chính hãng tham gia chương trình khuyến mãi
                này. Bên cạnh đó, Shopee còn tập hợp rất nhiều thương hiệu đình
                đám được các nhà bán lẻ uy tín phân phối bán trên Shopee, top
                sản phẩm hot deal cho bạn săn sale luôn cập nhật mỗi giờ, mỗi
                ngày, đem đến cho bạn sự lựa chọn đa dạng, từ các hãng mỹ phẩm
                nổi tiếng hàng đầu như Kiehl's, Fresh, The Ordinary, Foreo,
                Transino, SK-II... Đến những thương hiệu công nghệ nổi tiếng như
                camera hành trình Gopro, loa Marshall, bảng vẽ điện tử Huion,
                máy quay DJI Osmo Pocket, loa Harman Kardon, Razer...{" "}
            </Typography>
            <Box className={classes.styleSpace2}></Box>
            <Typography variant="caption">
                MUA HÀNG CHÍNH HÃNG TỪ CÁC THƯƠNG HIỆU LỚN VỚI SHOPEE
            </Typography>
            <Box className={classes.styleSpace2}></Box>
            <Typography variant="body2">
                Mua hàng trên Shopee luôn là một trải nghiệm ấn tượng. Dù bạn
                đang có nhu cầu mua bất kỳ mặt hàng thời trang nam, Thời Trang
                Nữ, đồng hồ, điện thoại, nước rửa tay khô hay khẩu trang N95 thì
                Shopee cũng sẽ đảm bảo cung cấp cho bạn những sản phẩm ưng ý.
                Bên cạnh đó, Shopee cũng có sự tham gia của các thương hiệu hàng
                đầu thế giới ở đa dạng nhiều lĩnh vực khác nhau. Trong đó có thể
                kể đến Samsung, OPPO, Xiaomi, Innisfree, Unilever, P&G,
                Biti’s,...Các thương hiệu này hiện cũng đã có cửa hàng chính
                thức trên Shopee Mall với hàng trăm mặt hàng chính hãng, được
                cập nhập liên tục. Là một kênh bán hàng uy tín, Shopee luôn cam
                kết mang lại cho khách hàng những trải nghiệm mua sắm online giá
                rẻ, an toàn và tin cậy. Mọi thông tin về người bán và người mua
                đều được bảo mật tuyệt đối. Các hoạt động giao dịch thanh toán
                tại Shopee luôn được đảm bảo diễn ra nhanh chóng, an toàn. Một
                vấn đề nữa khiến cho các khách hàng luôn quan tâm đó chính là
                mua hàng trên Shopee có đảm bảo không. Shopee luôn cam kết mọi
                sản phẩm trên Shopee, đặc biệt là Shopee Mall đều là những sản
                phẩm chính hãng, đầy đủ tem nhãn, bảo hành từ nhà bán hàng.
                Ngoài ra, Shopee bảo vệ người mua và người bán bằng cách giữ số
                tiền giao dịch đến khi người mua xác nhận đồng ý với đơn hàng và
                không có yêu cầu khiếu nại, trả hàng hay hoàn tiền nào. Thanh
                toán sau đó sẽ được chuyển đến cho người bán.
            </Typography>
            <Box className={classes.styleSpace1}></Box>
            <Typography variant="body2">
                Đến với Shopee ngay hôm nay để mua hàng online giá rẻ và trải
                nghiệm dịch vụ chăm sóc khách hàng tuyệt vời tại đây. Đặc biệt
                khi mua sắm trên Shopee Mall, bạn sẽ được miễn phí vận chuyển,
                giao hàng tận nơi và 7 ngày miễn phí trả hàng. Ngoài ra, khách
                hàng có thể sử dụng Shopee Xu để đổi lấy mã giảm giá có giá trị
                cao và voucher dịch vụ hấp dẫn. Tiếp đến là Shopee Mum's Club,
                Shopee Beauty Club và Shopee Book Club với các ưu đãi độc quyền
                từ các thương hiệu lớn có những khách hàng đã đăng ký làm thành
                viên. Hãy truy cập ngay Shopee.vn hoặc tải ngay ứng dụng Shopee
                về điện thoại ngay hôm nay!
            </Typography>
        </Box>
    );
};

export default FooterTop;
