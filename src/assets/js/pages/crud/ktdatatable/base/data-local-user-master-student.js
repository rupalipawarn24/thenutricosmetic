'use strict';
// Class definition

var KTDatatableDataLocalDemo = function() {
    // Private functions

    // demo initializer
    var demo = function() {
        var dataJSONArray = JSON.parse('[{"RecordID":1,"AdmissionNo":"STG/1996/A-42","StudentName":"Sameer Sharma","DateOfBirth":"15-05-1993","Stream":3,"Class":"5","Section":"A","RollNo":"18","Actions":null},\n' +
            '{"RecordID":2,"AdmissionNo":"STG/2009/D-27","StudentName":"Richa Dedhia","DateOfBirth":"15-05-1993","Stream":4,"Class":"1","Section":"C","RollNo":"29","Actions":null},\n' +
            '{"RecordID":3,"AdmissionNo":"STG/2011/B-18","StudentName":"Manish Jambre","DateOfBirth":"23-09-2001","Stream":2,"Class":"6","Section":"E","RollNo":"64","Actions":null},\n' +
            '{"RecordID":4,"AdmissionNo":"STG/2000/A-69","StudentName":"Amrish Mane","DateOfBirth":"05-01-2005","Stream":3,"Class":"8","Section":"A","RollNo":"05","Actions":null},\n' +
            '{"RecordID":98,"AdmissionNo":"STG/2007/C-16","StudentName":"Mahesh Kamat","DateOfBirth":"28-02-2008","Stream":1,"Class":"3","Section":"D","RollNo":"22","Actions":null},\n' +
            '{"RecordID":99,"AdmissionNo":"STG/1996/B-33","StudentName":"Dhaval Panjwani","DateOfBirth":"19-03-1997","Stream":4,"Class":"1","Section":"B","RollNo":"67","Actions":null},\n' +
            '{"RecordID":100,"AdmissionNo":"STG/2014/D-11","StudentName":"Shweta Bhatt","DateOfBirth":"28-12-1999","Stream":2,"Class":"9","Section":"F","RollNo":"35","Actions":null}]');

        var datatable = $('#kt_datatable').KTDatatable({
            // datasource definition
            data: {
                type: 'local',
                source: dataJSONArray,
                pageSize: 10,
            },

            // layout definition
            layout: {
                scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
                // height: 450, // datatable's body's fixed height
                footer: false, // display/hide footer
            },

            // column sorting
            sortable: true,

            pagination: true,

            search: {
                input: $('#kt_datatable_search_query'),
                key: 'generalSearch'
            },

            // columns definition
            columns: [{
                field: 'AdmissionNo',
                title: 'Admission No.',
            },  {
                field: 'StudentName',
                title: 'Student Name',
            },	{
                field: 'DateOfBirth',
                title: 'Date of Birth',
                type: 'date',
                format: 'DD-MM-YYYY',				
            }, {
                field: 'Class',
                title: 'Class',
            }, {
                field: 'Section',
                title: 'Section',
            }, {
                field: 'RollNo',
                title: 'Roll No.',
            }, {
                field: 'Stream',
                title: 'Stream',
                // callback function support for column rendering
                template: function(row) {
                    var status = {
                        1: {
                            'title': 'Nursery & KG',
                            'class': ' label-light-warning'
                        },
                        2: {
                            'title': 'Primary',
                            'class': ' label-light-success'
                        },
                        3: {
                            'title': 'Secondary',
                            'class': ' label-light-danger'
                        },
                        4: {
                            'title': 'ISC',
                            'class': ' label-light-info'
                        },
                        5: {
                            'title': 'Received',
                            'class': ' label-light-info'
                        },
                        6: {
                            'title': 'Danger',
                            'class': ' label-light-danger'
                        },
                        7: {
                            'title': 'Warning',
                            'class': ' label-light-warning'
                        },
                    };
                    return '<span class="label font-weight-bold label-lg ' + status[row.Stream].class + ' label-inline">' + status[row.Stream].title + '</span>';
                },
            },  {
                field: 'Actions',
                title: 'Actions',
                sortable: false,
                width: 125,
                overflow: 'visible',
                autoHide: false,
                template: function() {
                    return '\
							<a href="javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" title="Edit">\
	                            <span class="svg-icon svg-icon-md">\
	                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\
	                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
	                                        <rect x="0" y="0" width="24" height="24"/>\
	                                        <path d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z" fill="#000000" fill-rule="nonzero"\ transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "/>\
	                                        <rect fill="#000000" opacity="0.3" x="5" y="20" width="15" height="2" rx="1"/>\
	                                    </g>\
	                                </svg>\
	                            </span>\
							</a>\
							<a href="javascript:;" class="btn btn-sm btn-clean btn-icon" title="Delete">\
	                            <span class="svg-icon svg-icon-md">\
	                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\
	                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
	                                        <rect x="0" y="0" width="24" height="24"/>\
	                                        <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fill-rule="nonzero"/>\
	                                        <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3"/>\
	                                    </g>\
	                                </svg>\
	                            </span>\
							</a>\
						';
                },
            }],
        });

        $('#kt_datatable_search_status').on('change', function() {
            datatable.search($(this).val().toLowerCase(), 'Stream');
        });

        $('#kt_datatable_search_type').on('change', function() {
            datatable.search($(this).val().toLowerCase(), 'Class');
        });

        $('#kt_datatable_search_status, #kt_datatable_search_type').selectpicker();
    };

    return {
        // Public functions
        init: function() {
            // init dmeo
            demo();
        },
    };
}();

jQuery(document).ready(function() {
    KTDatatableDataLocalDemo.init();
});
