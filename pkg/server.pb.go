// Code generated by protoc-gen-go. DO NOT EDIT.
// source: server.proto

package livescore

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type GetPersonByIdRequest struct {
	Id                   string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetPersonByIdRequest) Reset()         { *m = GetPersonByIdRequest{} }
func (m *GetPersonByIdRequest) String() string { return proto.CompactTextString(m) }
func (*GetPersonByIdRequest) ProtoMessage()    {}
func (*GetPersonByIdRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_ad098daeda4239f7, []int{0}
}

func (m *GetPersonByIdRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetPersonByIdRequest.Unmarshal(m, b)
}
func (m *GetPersonByIdRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetPersonByIdRequest.Marshal(b, m, deterministic)
}
func (m *GetPersonByIdRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetPersonByIdRequest.Merge(m, src)
}
func (m *GetPersonByIdRequest) XXX_Size() int {
	return xxx_messageInfo_GetPersonByIdRequest.Size(m)
}
func (m *GetPersonByIdRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetPersonByIdRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetPersonByIdRequest proto.InternalMessageInfo

func (m *GetPersonByIdRequest) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

type GetPersonByIdResponse struct {
	Person               *Person  `protobuf:"bytes,1,opt,name=person,proto3" json:"person,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetPersonByIdResponse) Reset()         { *m = GetPersonByIdResponse{} }
func (m *GetPersonByIdResponse) String() string { return proto.CompactTextString(m) }
func (*GetPersonByIdResponse) ProtoMessage()    {}
func (*GetPersonByIdResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_ad098daeda4239f7, []int{1}
}

func (m *GetPersonByIdResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetPersonByIdResponse.Unmarshal(m, b)
}
func (m *GetPersonByIdResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetPersonByIdResponse.Marshal(b, m, deterministic)
}
func (m *GetPersonByIdResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetPersonByIdResponse.Merge(m, src)
}
func (m *GetPersonByIdResponse) XXX_Size() int {
	return xxx_messageInfo_GetPersonByIdResponse.Size(m)
}
func (m *GetPersonByIdResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_GetPersonByIdResponse.DiscardUnknown(m)
}

var xxx_messageInfo_GetPersonByIdResponse proto.InternalMessageInfo

func (m *GetPersonByIdResponse) GetPerson() *Person {
	if m != nil {
		return m.Person
	}
	return nil
}

type CreatePersonRequest struct {
	Person               *Person  `protobuf:"bytes,1,opt,name=person,proto3" json:"person,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *CreatePersonRequest) Reset()         { *m = CreatePersonRequest{} }
func (m *CreatePersonRequest) String() string { return proto.CompactTextString(m) }
func (*CreatePersonRequest) ProtoMessage()    {}
func (*CreatePersonRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_ad098daeda4239f7, []int{2}
}

func (m *CreatePersonRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreatePersonRequest.Unmarshal(m, b)
}
func (m *CreatePersonRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreatePersonRequest.Marshal(b, m, deterministic)
}
func (m *CreatePersonRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreatePersonRequest.Merge(m, src)
}
func (m *CreatePersonRequest) XXX_Size() int {
	return xxx_messageInfo_CreatePersonRequest.Size(m)
}
func (m *CreatePersonRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_CreatePersonRequest.DiscardUnknown(m)
}

var xxx_messageInfo_CreatePersonRequest proto.InternalMessageInfo

func (m *CreatePersonRequest) GetPerson() *Person {
	if m != nil {
		return m.Person
	}
	return nil
}

type CreatePersonResponse struct {
	Person               *Person  `protobuf:"bytes,1,opt,name=person,proto3" json:"person,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *CreatePersonResponse) Reset()         { *m = CreatePersonResponse{} }
func (m *CreatePersonResponse) String() string { return proto.CompactTextString(m) }
func (*CreatePersonResponse) ProtoMessage()    {}
func (*CreatePersonResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_ad098daeda4239f7, []int{3}
}

func (m *CreatePersonResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreatePersonResponse.Unmarshal(m, b)
}
func (m *CreatePersonResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreatePersonResponse.Marshal(b, m, deterministic)
}
func (m *CreatePersonResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreatePersonResponse.Merge(m, src)
}
func (m *CreatePersonResponse) XXX_Size() int {
	return xxx_messageInfo_CreatePersonResponse.Size(m)
}
func (m *CreatePersonResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_CreatePersonResponse.DiscardUnknown(m)
}

var xxx_messageInfo_CreatePersonResponse proto.InternalMessageInfo

func (m *CreatePersonResponse) GetPerson() *Person {
	if m != nil {
		return m.Person
	}
	return nil
}

type GetAllPeopleRequest struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetAllPeopleRequest) Reset()         { *m = GetAllPeopleRequest{} }
func (m *GetAllPeopleRequest) String() string { return proto.CompactTextString(m) }
func (*GetAllPeopleRequest) ProtoMessage()    {}
func (*GetAllPeopleRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_ad098daeda4239f7, []int{4}
}

func (m *GetAllPeopleRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetAllPeopleRequest.Unmarshal(m, b)
}
func (m *GetAllPeopleRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetAllPeopleRequest.Marshal(b, m, deterministic)
}
func (m *GetAllPeopleRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetAllPeopleRequest.Merge(m, src)
}
func (m *GetAllPeopleRequest) XXX_Size() int {
	return xxx_messageInfo_GetAllPeopleRequest.Size(m)
}
func (m *GetAllPeopleRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetAllPeopleRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetAllPeopleRequest proto.InternalMessageInfo

type GetAllPeopleResponse struct {
	People               []*Person `protobuf:"bytes,1,rep,name=people,proto3" json:"people,omitempty"`
	XXX_NoUnkeyedLiteral struct{}  `json:"-"`
	XXX_unrecognized     []byte    `json:"-"`
	XXX_sizecache        int32     `json:"-"`
}

func (m *GetAllPeopleResponse) Reset()         { *m = GetAllPeopleResponse{} }
func (m *GetAllPeopleResponse) String() string { return proto.CompactTextString(m) }
func (*GetAllPeopleResponse) ProtoMessage()    {}
func (*GetAllPeopleResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_ad098daeda4239f7, []int{5}
}

func (m *GetAllPeopleResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetAllPeopleResponse.Unmarshal(m, b)
}
func (m *GetAllPeopleResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetAllPeopleResponse.Marshal(b, m, deterministic)
}
func (m *GetAllPeopleResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetAllPeopleResponse.Merge(m, src)
}
func (m *GetAllPeopleResponse) XXX_Size() int {
	return xxx_messageInfo_GetAllPeopleResponse.Size(m)
}
func (m *GetAllPeopleResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_GetAllPeopleResponse.DiscardUnknown(m)
}

var xxx_messageInfo_GetAllPeopleResponse proto.InternalMessageInfo

func (m *GetAllPeopleResponse) GetPeople() []*Person {
	if m != nil {
		return m.People
	}
	return nil
}

func init() {
	proto.RegisterType((*GetPersonByIdRequest)(nil), "GetPersonByIdRequest")
	proto.RegisterType((*GetPersonByIdResponse)(nil), "GetPersonByIdResponse")
	proto.RegisterType((*CreatePersonRequest)(nil), "CreatePersonRequest")
	proto.RegisterType((*CreatePersonResponse)(nil), "CreatePersonResponse")
	proto.RegisterType((*GetAllPeopleRequest)(nil), "GetAllPeopleRequest")
	proto.RegisterType((*GetAllPeopleResponse)(nil), "GetAllPeopleResponse")
}

func init() {
	proto.RegisterFile("server.proto", fileDescriptor_ad098daeda4239f7)
}

var fileDescriptor_ad098daeda4239f7 = []byte{
	// 264 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x92, 0x3f, 0x4b, 0x03, 0x41,
	0x14, 0xc4, 0x73, 0x11, 0x22, 0xbe, 0x24, 0x22, 0x9b, 0x5b, 0x09, 0xd7, 0x18, 0xb6, 0x10, 0xab,
	0x27, 0x44, 0x50, 0x1b, 0x41, 0x63, 0x11, 0x04, 0x8b, 0x70, 0xe9, 0xec, 0x34, 0x37, 0xc5, 0xc2,
	0x91, 0x3d, 0x77, 0xd7, 0x03, 0xbf, 0xa6, 0x9f, 0x48, 0xee, 0x4f, 0x71, 0x17, 0x16, 0xb4, 0xdc,
	0x1f, 0x6f, 0x66, 0x98, 0x61, 0x69, 0xe2, 0x60, 0x4b, 0x58, 0x2e, 0xac, 0xf1, 0x26, 0x99, 0x14,
	0xb0, 0xce, 0xec, 0x9b, 0x97, 0xba, 0xa4, 0x78, 0x0d, 0xbf, 0xa9, 0xd1, 0xea, 0xfb, 0x25, 0x4b,
	0xf1, 0xf9, 0x05, 0xe7, 0xc5, 0x29, 0x0d, 0x75, 0x36, 0x8f, 0x16, 0xd1, 0xd5, 0x49, 0x3a, 0xd4,
	0x99, 0xba, 0x27, 0x79, 0x70, 0xe7, 0x0a, 0xb3, 0x77, 0x10, 0x17, 0x34, 0x6a, 0x0c, 0xeb, 0xe3,
	0xf1, 0xf2, 0x98, 0x9b, 0xa3, 0xb4, 0xc5, 0xea, 0x96, 0x66, 0xcf, 0x16, 0xef, 0x1e, 0x2d, 0x6f,
	0x03, 0xfe, 0xd4, 0xdd, 0x51, 0xdc, 0xd7, 0xfd, 0x37, 0x50, 0xd2, 0x6c, 0x0d, 0xff, 0x94, 0xe7,
	0x1b, 0x98, 0x22, 0x47, 0x1b, 0x58, 0xf9, 0xf5, 0x71, 0xd7, 0xaf, 0x22, 0xf3, 0x68, 0x71, 0x74,
	0xe0, 0x57, 0xe1, 0xe5, 0x4f, 0x44, 0x67, 0xaf, 0xba, 0xc4, 0x76, 0x67, 0x2c, 0xb6, 0xb0, 0xa5,
	0xde, 0x41, 0x3c, 0xd2, 0xb4, 0xb7, 0x87, 0x90, 0x1c, 0xda, 0x31, 0x39, 0xe7, 0xe0, 0x6c, 0x6a,
	0x20, 0x1e, 0x68, 0xd2, 0xed, 0x27, 0x62, 0x0e, 0xcc, 0x94, 0x48, 0x0e, 0x8d, 0xd0, 0xc8, 0xbb,
	0x75, 0x44, 0xcc, 0x81, 0xd2, 0x89, 0xe4, 0x50, 0x67, 0x35, 0x58, 0x4d, 0xdf, 0xc6, 0x7c, 0x9d,
	0xeb, 0x12, 0xae, 0x6a, 0xf5, 0x31, 0xaa, 0x7f, 0xc3, 0xcd, 0x6f, 0x00, 0x00, 0x00, 0xff, 0xff,
	0xc7, 0xa7, 0xd8, 0xc1, 0x2b, 0x02, 0x00, 0x00,
}
