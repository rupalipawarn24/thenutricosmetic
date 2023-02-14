'use strict';
// Class definition

var KTDatatableDataLocalDemo = function() {
    // Private functions

    // demo initializer
    var demo = function() {
        var dataJSONArray = JSON.parse('[{"RecordID":1,"StudentName":"Sameer Sharma","RollNo":"24","WrittenMarks":"Geography","ProjectAssignmentTitle":"Geography - Marked World Map","Status":3,"DocumentType":1,"ClassStudent":"1) Sameer Sharma • Class 9B • Roll no. 43 </br>2) Manish Jambre • Class 10A • Roll no. 21","Actions":null},\n' +
            '{"RecordID":2,"StudentName":"Richa Dedhia","RollNo":"39","WrittenMarks":"Arts","ProjectAssignmentTitle":"Arts - How to build a rock statue","Status":1,"DocumentType":3,"ClassStudent":"9B","Actions":null},\n' +
            '{"RecordID":3,"StudentName":"Manish Jambre","RollNo":"5","WrittenMarks":"Social Science","ProjectAssignmentTitle":"Social Science - The Etymology and Evolution of History","Status":2,"DocumentType":1,"ClassStudent":"3A, 3C, 3F, 6C, 9B","Actions":null},\n' +
            '{"RecordID":4,"StudentName":"Amrish Mane","RollNo":"16","WrittenMarks":"Maths","ProjectAssignmentTitle":"Maths - Equations, Algebraic expressions & Worksheet","Status":1,"DocumentType":1,"ClassStudent":"7C","Actions":null},\n' +
            '{"RecordID":98,"StudentName":"Mahesh Kamat","RollNo":"69","WrittenMarks":"Political Science","ProjectAssignmentTitle":"Political Science - How India votes and what it means","Status":2,"DocumentType":3,"ClassStudent":"9A","Actions":null},\n' +
            '{"RecordID":99,"StudentName":"Dhaval Panjwani","RollNo":"10","WrittenMarks":"Arts","ProjectAssignmentTitle":"Arts - Expressive Pastel self-portraits","Status":1,"DocumentType":2,"ClassStudent":"5E","Actions":null},\n' +
            '{"RecordID":100,"StudentName":"Shweta Bhatt","RollNo":"18","WrittenMarks":"Science","ProjectAssignmentTitle":"Science - Write on topic: A device that condenses water","Status":3,"DocumentType":2,"ClassStudent":"10A","Actions":null}]');

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
                field: 'StudentName',
                title: 'Student Name',
            },  {
                field: 'RollNo',
                title: 'Roll No.',
				width: 40,
            },	{
                field: 'Absent',
                title: 'Absent',
				width: 60,
				template: function() {
                    return '\
							<div class="checkbox-inline">\
							<label class="checkbox">\
							<input type="checkbox" name="Checkboxes2">\
							<span></span></label>\
							</div>\
						';
                },				
            },	{
                field: 'WrittenMarks',
                title: 'Written Marks',
				width: 80,
                template: function() {
                    return '\
							<input type="text" class="form-control">\
							</input>\
						';
                },				
            },	{
                field: 'PracticalMarks',
                title: 'Practical Marks',
				width: 80,
                template: function() {
                    return '\
							<input type="text" class="form-control">\
							</input>\
						';
                },				
            },  {
                field: 'OralViva',
                title: 'Oral/Viva Marks',
				width: 80,
                template: function() {
                    return '\
							<input type="text" class="form-control">\
							</input>\
						';
                },				
            }, 	{
                field: 'Grade',
                title: 'Grade',
				template: function() {
                    return '\
						<select class="form-control">\
							<option value="1">Select</option>\
							<option value="1">A+</option>\
							<option value="2">A</option>\
							<option value="3">B</option>\
							<option value="3">C</option>\
						</select>\
						';
                },				
            }, 	{
                field: 'Remarks',
                title: 'Remarks',
                template: function() {
                    return '\
							<input type="text" class="form-control">\
							</input>\
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
