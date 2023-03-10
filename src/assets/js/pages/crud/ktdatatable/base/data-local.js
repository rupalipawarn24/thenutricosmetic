'use strict';
// Class definition

var KTDatatableDataLocalDemo = function() {
    // Private functions

    // demo initializer
    var demo = function() {
        var dataJSONArray = JSON.parse('[{"RecordID":1,"Date":"27-04-2022","ReceivedFrom":"Sameer Sharma","Subject":"Geography","ProjectAssignmentTitle":"Geography - Marked World Map","Status":3,"DocumentType":1,"ClassSection":"6D","Actions":null},\n' +
            '{"RecordID":2,"Date":"13-12-2021","ReceivedFrom":"Manish Jambre","Subject":"Arts","ProjectAssignmentTitle":"Arts - How to build a rock statue","Status":1,"DocumentType":3,"ClassSection":"9B","Actions":null},\n' +
            '{"RecordID":3,"Date":"10-10-2022","ReceivedFrom":"Mahesh Kamat","Subject":"Social Science","ProjectAssignmentTitle":"Social Science - The Etymology and Evolution of History","Status":4,"DocumentType":3,"ClassSection":"3A","Actions":null},\n' +
            '{"RecordID":4,"Date":"18-03-2021","ReceivedFrom":"Dhaval Panjwani","Subject":"Maths","ProjectAssignmentTitle":"Maths - Equations, Algebraic expressions & Worksheet","Status":4,"DocumentType":1,"ClassSection":"7C","Actions":null},\n' +
            '{"RecordID":98,"Date":"15-11-2022","ReceivedFrom":"Richa Dedhia","Subject":"Political Science","ProjectAssignmentTitle":"Political Science - How India votes and what it means","Status":2,"DocumentType":3,"ClassSection":"9A","Actions":null},\n' +
            '{"RecordID":99,"Date":"16-09-2022","ReceivedFrom":"Shweta Bhatt","Subject":"Arts","ProjectAssignmentTitle":"Arts - Expressive Pastel self-portraits","Status":1,"DocumentType":2,"ClassSection":"5E","Actions":null},\n' +
            '{"RecordID":100,"Date":"05-01-2021","ReceivedFrom":"Amrish Mane","Subject":"Science","ProjectAssignmentTitle":"Science - Write on topic: A device that condenses water","Status":3,"DocumentType":2,"ClassSection":"10A","Actions":null}]');

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
                field: 'Date',
                title: 'Date',
				type: 'date',
                format: 'DD-MM-YYYY',
            },  {
					field: 'Attachment',
					title: 'Attachment',
					template: function(data) {
						var number = KTUtil.getRandomInt(1, 14);
						var user_img = 'background-image:url(\'assets/media/users/200_' + number + '.jpg\')';

						var output = '';
						if (number > 0) {
							output = '<div class="d-flex align-items-center">\
								<div class="symbol symbol-40 flex-shrink-0">\
									<a href="#">\
									<div class="symbol-label" style="' + user_img + '"></div>\
									</a>\
								</div>\
							</div>';
						}
						else {
							var stateNo = KTUtil.getRandomInt(0, 7);
							var states = [
								'success',
								'primary',
								'danger',
								'success',
								'warning',
								'dark',
								'primary',
								'info'];
							var state = states[stateNo];

							output = '';
						}

						return output;
					},
				}, 	{
                field: 'ReceivedFrom',
                title: 'Received From',
            }, {
                field: 'Subject',
                title: 'Subject',
            },	{
                field: 'ProjectAssignmentTitle',
                title: 'Project Assignment Title',
            }, {
                field: 'Status',
                title: 'Status',
                // callback function support for column rendering
                template: function(row) {
                    var status = {
                        1: {
                            'title': 'Approval Pending',
                            'class': ' label-light-warning'
                        },
                        2: {
                            'title': 'Approved & Finished',
                            'class': ' label-light-success'
                        },
                        3: {
                            'title': 'Returned back',
                            'class': ' label-light-info'
                        },
                        4: {
                            'title': 'Rejected',
                            'class': ' label-light-danger'
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
                    return '<span class="label font-weight-bold label-lg ' + status[row.Status].class + ' label-inline">' + status[row.Status].title + '</span>';
                },
            },  {
                field: 'ClassSection',
                title: 'Class/Section',
            },  {
                field: 'DocumentType',
                title: 'Document Type',
                autoHide: false,
                // callback function support for column rendering
                template: function(row) {
                    var status = {
                        1: {
                            'title': 'Homework',
                            'state': 'danger'
                        },
                        2: {
                            'title': 'Project',
                            'state': 'primary'
                        },
                        3: {
                            'title': 'Assignment',
                            'state': 'success'
                        },
                    };
                    return '<span class="label label-' + status[row.DocumentType].state + ' label-dot mr-2"></span><span class="font-weight-bold text-' + status[row.DocumentType].state + '">' +
                        status[row.DocumentType].title + '</span>';
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
            datatable.search($(this).val().toLowerCase(), 'Status');
        });

        $('#kt_datatable_search_type').on('change', function() {
            datatable.search($(this).val().toLowerCase(), 'DocumentType');
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
