import React, { Component, Fragment } from 'react';
import { StyledModel } from '../ModalDD';
import { StyleTable } from '../tbDieuDuongComponent';
import btnEdit from '../../../img/btnEdit.svg';
class ModalBC extends Component {
    state = {
        isDetail: false
    }
    showDetail = (value) => () => {
        this.setState({
            isDetail: value
        })
    }
    render() {
        return (
            <StyledModel>
                <div className="modalService-dialog modal-lg ">
                    <div className="modalService-content">
                        {/* Modal Header */}
                        <div className="modalService-header">
                            <h4 className="modal-title">Giấy phép hành nghề</h4>
                            <button type="button" className="close">×</button>
                        </div>

                        {/* table */}
                        <div className="modalService-body">
                            <div className="titleGroup">Danh sách giấy phép hành nghề :</div>
                            <div className="text-right mb-3">
                                <button type="submit" className="btn btnAccept" onClick={this.showDetail(true)}>Thêm mới</button>
                            </div>
                            <StyleTable>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                No.
                                        </th>
                                            <th scope="col">
                                                Mã đào tạo viên
                                        </th>
                                            <th scope="col">
                                                Chuyên ngành
                                        </th>
                                            <th scope="col">
                                                Trạng thái
                                        </th>
                                            <th scope="col">
                                                Tùy chỉnh
                                        </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="tRow">
                                            {/**No. */}
                                            <th>1</th>
                                            {/**Mã đào tạo viên. */}
                                            <td>MD001</td>
                                            {/**Chuyên ngành */}
                                            <td>Điều dưỡng viên</td>
                                            {/**Trạng thái */}
                                            <td className="tdStatus">Đang sử dụng</td>
                                            {/**Tùy chỉnh */}
                                            <td className="d-flex justify-content-center groupBtn">
                                                <button className="btnCustom">
                                                    <img src={btnEdit} alt="btnEdit" />
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </StyleTable>

                        </div>
                        {/* Detail */}
                        {this.state.isDetail
                            ? <Fragment>
                                <form className="modalService-body">
                                    <div className="modalService-body">
                                        <div className="titleGroup bb"></div>
                                    </div>
                                    <div className="titleGroup">Thông tin chi tiết giấy phép hành nghề :</div>
                                    <div className="d-flex justify-content-between">
                                        <div className="form-group secondFormleft ac">
                                            <label >Mã điều dưỡng: </label>
                                            <input type="text" className="form-contro"
                                                name="maDieuDuong"
                                            />
                                        </div>
                                        <div className="form-group secondFormright">
                                            <label >Mã đào tạo viên: </label>
                                            <select className="form-contro">
                                                <option>MDD0002</option>
                                                <option>NNK0001</option>
                                                <option>NNK0004</option>
                                                <option>MDD0002</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label >Tên chuyên ngành: </label>
                                        <input type="text" className="form-contro"
                                            name="tenDieuDuong"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Thông tin chuyên ngành</label>
                                        <textarea name="" cols="30" rows="100" height="70px" className="form-contro mul_text"
                                            style={{ height: '100px' }}
                                            name="yeuCauCongViec"
                                        >
                                        </textarea>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div className="form-group secondFormleft ac">
                                            <label >Xếp loại: </label>
                                            <select className="form-contro">
                                                <option>Chưa xếp loại</option>
                                                <option>Giỏi</option>
                                                <option>Khá</option>
                                                <option>Trung bình</option>
                                            </select>
                                        </div>
                                        <div className="form-group secondFormright">
                                            <label >Trạng thái: </label>
                                            <select className="form-contro">
                                                <option>Đang đào tạo</option>
                                                <option>Đang sử dụng</option>
                                                <option>Ngưng sử dụng</option>
                                            </select>
                                        </div>
                                    </div>




                                    <div className="text-right">
                                        <button type="submit" className="btn btnAccept" onClick={this.showDetail(false)}>Xác nhận</button>
                                    </div>
                                </form>

                            </Fragment>
                            : <Fragment>

                            </Fragment>
                        }
                    </div>
                </div>


            </StyledModel>
        );
    }
}

export default ModalBC;